import { LegislativeProposalPrimitive } from "@/types/proposal"

type ColumnProps = {
  title: string;
  proposals: LegislativeProposalPrimitive[];
}

const Column: React.FC<ColumnProps> = ({ 
  title, 
  proposals 
}) => {
  return (
    <div className="flex flex-col gap-6 pr-8">
      <p className="text-2xl font-black">
        {title} 
        <span className="rounded-full bg-spaak-purple px-4 text-base font-normal">{proposals.length}</span>
      </p>


    </div>
  )
}

export default Column;