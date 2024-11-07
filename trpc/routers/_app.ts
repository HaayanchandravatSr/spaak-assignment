import { PrismaClient } from "@prisma/client";
import { baseProcedure, createTRPCRouter } from "../init";
import { mapProposalToPrimitive } from "@/types/proposal";

const prisma = new PrismaClient();

export const trpcRouter = createTRPCRouter({
  getProposals: baseProcedure
    .query(async () => {
      const proposals = await prisma.legislativeProposal.findMany();

      return proposals.map(mapProposalToPrimitive)
    })
});

export type TrpcRouter = typeof trpcRouter;