import { LegislativeProposalPrimitive } from "@/types/proposal"
import { MdOutlineOpenInNew } from "react-icons/md";

type CardProps = {
  proposal: LegislativeProposalPrimitive;
};

const Card: React.FC<CardProps> = ({ 
  proposal 
}) => {
  return (
    <div className="rounded-3xl">
      
      <div className="bg-gray-700 p-4">
        <div className="flex justify-between">
          <p className="bg-red-800 font-black rounded-full px-4 shadow-md">{proposal.nummer}</p>
          <MdOutlineOpenInNew className="text-cyan-900" />
        </div>
      </div>
    
    </div>
  )
}

export default Card;