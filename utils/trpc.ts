import { TrpcRouter } from "@/trpc/routers/_app";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<TrpcRouter>();