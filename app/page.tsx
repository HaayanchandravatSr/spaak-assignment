import Header from "@/components/Header";
import Board from "@/components/Board/Board";
import { HydrateClient, trpc } from "@/trpc/server";

export default function Home() {
  void trpc.getProposals.prefetch();
  
  return (
    <HydrateClient>
      <Header />
      <Board />
    </HydrateClient>
  );
}
