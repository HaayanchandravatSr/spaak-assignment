'use client'

import { trpc } from "@/trpc/client";
import { LegislativeProposalsGroupedByStatusId } from "@/types/proposal";
import { useEffect, useState } from "react";
import Column from "./Column";

const Board: React.FC = () => {
  const [groupedProposals, setGroupedProposals] = useState<LegislativeProposalsGroupedByStatusId>();

  const { data: proposals, isLoading } = trpc.getProposals.useQuery();

  useEffect(() => {
    if (!proposals) return;

    const uniqueStatusIds = Array.from(new Set(proposals.map(p => p.statusid)));

    const constructedGroupedProposals: LegislativeProposalsGroupedByStatusId = [];

    uniqueStatusIds.forEach(id => {
      const filteredProposals = proposals.filter(p => p.statusid === id);

      constructedGroupedProposals.push({
        statusId: id,
        proposals: filteredProposals
      });
    })

    setGroupedProposals(constructedGroupedProposals)
  }, [proposals])

  return (
    <div className="h-[calc(100vh-5rem)] p-8 md:pb-0 overflow-x-scroll flex gap-8">
      {isLoading && 'LOADING...'}

      {!isLoading && groupedProposals && (
        groupedProposals.map(gp => <Column key={gp.statusId} title={gp.statusId.toString()} proposals={gp.proposals} />)
      )}
    </div>
  )
}

export default Board;