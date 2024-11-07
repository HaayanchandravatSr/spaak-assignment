import { LegislativeProposalPrimitive } from "@/types/proposal"
import Image from "next/image";
import { MdOutlineOpenInNew } from "react-icons/md";

type CardProps = {
  proposal: LegislativeProposalPrimitive;
};

const Card: React.FC<CardProps> = ({ 
  proposal 
}) => {
  return (
    <div>
      
      <div className="bg-zinc-800 p-4 rounded-t-2xl">
        <div className="flex justify-between">
          <p className="bg-red-800 font-black rounded-full px-4 shadow-md">{proposal.nummer}</p>
          <MdOutlineOpenInNew className="text-cyan-900 w-6 h-6" />
        </div>

        <p className="mt-6 text-lg font-bold">
          Forslag til folketingsbeslutning om {proposal.titelkort.substring(3)}
        </p>
      </div>

      <div className="bg-zinc-900 py-4 px-6 flex items-center gap-4 rounded-b-2xl">
        <Image 
          className="object-cover"
          width={32}
          height={32}
          src={'https://avatar.iran.liara.run/public'}
          alt="Profile picture"
        />

        <p className="text-gray-400 text-lg">
          {Math.random() > 0.5 ? 'Rick Sanchez' : 'Morty Smith'}
        </p>
      </div>
    
    </div>
  )
}

export default Card;