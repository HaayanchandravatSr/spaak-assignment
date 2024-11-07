import { GiShipWheel } from "react-icons/gi";

export default function Header() {
  return (
    <div className="bg-spaak-purple h-20 drop-shadow-md flex justify-center items-center md:justify-normal md:gap-6 md:pl-6">
      <GiShipWheel className="w-12 h-12 md:w-14 md:h-14 text-orange-800" />

      <div className="hidden md:block">
        <p className="font-black text-2xl">Law Overview</p>
        <p>Lov- og beslutninsforslag i Folketinget</p>
      </div>
    </div>
  )
}