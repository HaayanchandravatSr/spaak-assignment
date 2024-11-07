import 'server-only'; // <-- ensure this file cannot be imported from the client
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { cache } from 'react';
import { createCallerFactory } from './init';
import { makeQueryClient } from './query-client';
import { TrpcRouter, trpcRouter } from './routers/_app';

export const getQueryClient = cache(makeQueryClient);

const caller = createCallerFactory(trpcRouter)({});

export const { trpc, HydrateClient } = createHydrationHelpers<TrpcRouter>(
  caller,
  getQueryClient,
);