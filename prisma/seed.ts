import { GetLegislativeProposalsResponse, LegislativeProposalPrimitive, mapPrimitiveToProposal } from "../types/proposal";
import { PrismaClient } from '@prisma/client';
import * as fsPromises from 'fs/promises';
import * as fs from 'fs';

/**
 * 
 * @returns An array of proposals fetched in batches from ft.dk API
 */
const fetchProposals = async () => {
  let proposals: LegislativeProposalPrimitive[] = [];

  let nextLink: string | undefined = 'https://oda.ft.dk/api/Sag?$filter=(typeid eq 3 or typeid eq 5 or typeid eq 9) and periodeid eq 160';

  try {
    console.info('Attempting to fetch data from API...')

    do {
      const res = await fetch(nextLink);
      const json: GetLegislativeProposalsResponse = await res.json();
  
      proposals = [...proposals, ...json.value];
      nextLink = json["odata.nextLink"];
    } while (nextLink)

    console.info(`Fetched ${proposals.length} proposals, creating backup.json for future use...`)
    await fsPromises.writeFile('backup.json', JSON.stringify(proposals, undefined, 2));
    console.info('Successfully written proposals to backup.json!');

  } catch (e) {
    console.info('Unexpected error while fetching data: ', e);
    
    if (!fs.existsSync('backup.json')) {
      console.error('No backup.json file found as alternative data source, exiting...');
      process.exitCode = 1;
      return;
    }

    console.info('Found backup.json file, attempting to read file...')

    const data = await fsPromises.readFile('backup.json', 'utf8');
    proposals = JSON.parse(data) as LegislativeProposalPrimitive[];

    console.info('Successfully read proposals from backup file!')
  }

  return proposals;
}

const prisma = new PrismaClient();

const main = async () => {
  const proposals = await fetchProposals();
  
  if (!proposals) {
    console.info('Proposals could not be fetched for seeding!');
    return;
  }

  const promises = proposals.map(p => prisma.legislativeProposal.upsert({
    where: { id: p.id },
    update: {},
    create: mapPrimitiveToProposal(p)
  }));

  await Promise.all(promises);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
