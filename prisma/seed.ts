import { GetLegislativeProposalsResponse, LegislativeProposalPrimitive } from "@/@types/proposal";
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
    create: {
      id: p.id,
      kategoriid: p.kategoriid,
      lovnummer: p.lovnummer,
      lovnummerdato: new Date(p.lovnummerdato),
      nummer: p.nummer,
      nummernumerisk: p.nummernumerisk,
      nummerprefix: p.nummerprefix,
      offentlighedskode: p.offentlighedskode,
      opdateringsdato: new Date(p.opdateringsdato),
      periodeid: p.periodeid,
      resume: p.resume,
      statsbudgetsag: p.statsbudgetsag,
      statusid: p.statusid,
      titel: p.titel,
      titelkort: p.titelkort,
      typeid: p.typeid,
      afgoerelse: p.afgørelse,
      afgoerelsesdato: p.afgørelsesdato ? new Date(p.afgørelsesdato) : null,
      afgoerelsesresultatkode: p.afgørelsesresultatkode,
      afstemningskonklusion: p.afstemningskonklusion,
      baggrundsmateriale: p.baggrundsmateriale,
      begrundelse: p.begrundelse,
      deltundersagid: p.deltundersagid,
      fremsatundersagid: p.fremsatundersagid,
      nummerpostfix: p.nummerpostfix,
      paragraf: p.paragraf,
      paragrafnummer: p.paragrafnummer,
      raadsmodedato: p.raadsmodedato ? new Date(p.raadsmodedato) : null,
      retsinformationsurl: p.retsinformationsurl
    }
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
