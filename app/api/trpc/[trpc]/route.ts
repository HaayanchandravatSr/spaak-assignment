import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { trpcRouter } from '@/trpc/routers/_app';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: trpcRouter,
    createContext: () => ({}),
  });
export { handler as GET, handler as POST };