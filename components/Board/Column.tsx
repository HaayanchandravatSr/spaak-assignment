import { LegislativeProposalPrimitive } from "@/types/proposal"
import Card from "./Card";

type ColumnProps = {
  title: string;
  proposals: LegislativeProposalPrimitive[];
}

const Column: React.FC<ColumnProps> = ({ 
  title, 
  proposals 
}) => {
  return (
    <div className="flex flex-col gap-6 md:h-full w-[calc(100vw-2rem)] min-w-[calc(100vw-2rem)] md:w-[400px] md:min-w-[400px]">
      <p className="text-2xl font-black">
        {title}
        <span className="rounded-full bg-spaak-purple px-4 py-1 text-lg font-normal ml-4 text-gray-400">{proposals.length}</span>
      </p>

      <div className="flex flex-col gap-6 md:h-[calc(100%-56px)] md:overflow-y-scroll pr-8 pb-8">
        {proposals.map(p => <Card key={p.id} proposal={p} />)}
      </div>
    </div>
  )
}

export default Column;