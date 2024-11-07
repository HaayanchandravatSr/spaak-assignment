import { GetLegislativeProposalsResponse, LegislativeProposalPrimitive, mapPrimitiveToProposal } from "@/@types/proposal";
import { PrismaClient } from '@prisma/client';

/**
 * 
 * @returns An array of proposals fetched in batches from ft.dk API
 */
const fetchProposals = async () => {
  let proposals: LegislativeProposalPrimitive[] = [];

  let nextLink: string | undefined = 'https://oda.ft.dk/api/Sag?$filter=(typeid eq 3 or typeid eq 5 or typeid eq 9) and periodeid eq 160';

  do {
    const res = await fetch(nextLink);
    const json: GetLegislativeProposalsResponse = await res.json();

    proposals = [...proposals, ...json.value];
    nextLink = json["odata.nextLink"];
  } while (nextLink)

  return proposals;
}

const prisma = new PrismaClient();

const main = async () => {
  const proposals = await fetchProposals();

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
