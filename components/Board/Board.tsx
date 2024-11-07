'use client'

import { trpc } from "@/trpc/client";

const Board: React.FC = () => {
  const { data: proposals, isLoading } = trpc.getProposals.useQuery();

  return (
    <div className="h-[calc(100vh-5rem)] p-8 overflow-x-scroll">
      {isLoading && 'LOADING...'}

      {!isLoading && proposals && (
        proposals.map(p => <div key={p.id}>{p.nummer}</div>)
      )}
    </div>
  )
}

export default Board;