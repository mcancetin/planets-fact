import Link from "next/link";

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

type MobileNavProps = {
  pages: string[];
  onClose: () => void;
};

export default function MobileNav({ pages, onClose }: MobileNavProps) {
  return (
    <div className="absolute top-0 z-50 h-full w-full bg-dark-navy px-6 pt-11">
      <nav className="flex flex-col divide-y divide-white/20">
        {pages.map((page) => {
          return (
            <Link
              key={page}
              href={page}
              className="heading-4 flex items-center gap-6 text-lg uppercase"
              onClick={onClose}
            >
              <span
                className={`my-5 block h-5 w-5 rounded-full ${colorVariants[page]}`}
              ></span>
              {page}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
