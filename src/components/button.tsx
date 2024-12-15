import { MouseEventHandler } from "react";

const colorVariants: { [key: string]: string } = {
  mercury: "bg-sky-blue",
  venus: "bg-golden-yellow",
  earth: "bg-vibrant-purple",
  mars: "bg-bright-red",
  jupiter: "bg-deep-red",
  saturn: "bg-burnt-orange",
  uranus: "bg-teal-green",
  neptune: "bg-bright-blue",
};

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
  return (
    <button
      onClick={onClick}
      className={`${isActive ? colorVariants[planet] : ""} heading-3 inline-flex w-full gap-7 border border-white/20 px-7 py-3 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
    >
      <span className="text-white/50">{number}</span>
      <span className="heading-3 uppercase">{label}</span>
    </button>
  );
}
