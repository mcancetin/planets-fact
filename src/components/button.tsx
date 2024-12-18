import { getPlanetColor } from "@/utils/getPlanetColor";
import { MouseEventHandler } from "react";

type ButtonProps = {
  number: string;
  label: string;
  planet: string;
  isActive: boolean;
  onClick: MouseEventHandler;
};

export default function Button({
  number,
  label,
  planet,
  isActive,
  onClick,
}: ButtonProps) {
  const color = getPlanetColor(planet);
  return (
    <button
      onClick={onClick}
      className={`${isActive ? color : ""} heading-3 inline-flex w-full gap-7 border border-white/20 px-7 py-3 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
    >
      <span className="text-white/50">{number}</span>
      <span className="heading-3 uppercase">{label}</span>
    </button>
  );
}
