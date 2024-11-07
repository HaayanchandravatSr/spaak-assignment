import { mapProposalToPrimitive } from '@/@types/proposal';
import { PrismaClient } from '@prisma/client';
import { initTRPC } from '@trpc/server';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
const { createCallerFactory, router, procedure } = initTRPC.create();

const trpcRouter = router({
  getProposals: procedure
    .query(async () => {
      const proposals = await prisma.legislativeProposal.findMany();

      return proposals.map(mapProposalToPrimitive)
    })
});

export type TrpcRouter = typeof trpcRouter;

const createCaller = createCallerFactory(trpcRouter);
const caller = createCaller({});

export async function GET() {
  return NextResponse.json(await caller.getProposals());
}