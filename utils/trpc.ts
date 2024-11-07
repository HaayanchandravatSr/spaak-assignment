import { createTRPCReact } from "@trpc/react-query";
import type { TrpcRouter } from "../app/api/trpc/[trpc]/route";

export const trpc = createTRPCReact<TrpcRouter>();