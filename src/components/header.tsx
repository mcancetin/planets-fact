"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu } from "lucide-react";

import MobileNav from "@/components/mobile-nav";

const pages = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState<boolean>(false);

  const mainElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mainElement.current = document.querySelector("main");
  }, []);

  return (
    <>
      <header className="flex flex-row items-center justify-between border-b border-white/20 px-6 py-4 md:flex-col lg:flex-row">
        <div className="md:mb-9 lg:mb-0">
          <Link
            href="/"
            className="block font-antonio text-[1.725rem] uppercase leading-9 -tracking-[1.05px]"
          >
            The Planets
          </Link>
        </div>

        <nav className="hidden space-x-8 md:block">
          {pages.map((page) => (
            <Link
              key={page}
              href={page}
              className="heading-4 uppercase text-white/80"
            >
              {page}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileNavActive((prev) => !prev)}
        >
          <Menu
            className={`transition-colors ${
              isMobileNavActive ? "opacity-50" : "opacity-100"
            }`}
          />
        </button>
      </header>

      {isMobileNavActive &&
        mainElement.current &&
        createPortal(
          <MobileNav
            pages={pages}
            onClose={() => setIsMobileNavActive(false)}
          />,
          mainElement.current,
        )}
    </>
  );
}
