import { initTRPC } from "@trpc/server";
import superjson from 'superjson';

const t = initTRPC.create({
  transformer: superjson
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;