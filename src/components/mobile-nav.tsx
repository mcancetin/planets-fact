import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { getPlanetColor } from "@/utils/getPlanetColor";

type MobileNavProps = {
  pages: string[];
  onClose: () => void;
};

export default function MobileNav({ pages, onClose }: MobileNavProps) {
  const containerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-0 z-50 h-full w-full bg-dark-navy px-6 pt-11"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <nav className="flex flex-col divide-y divide-white/20">
          {pages.map((page, index) => {
            const color = getPlanetColor(page);
            return (
              <motion.div
                key={page}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={linkVariants}
              >
                <Link
                  href={page}
                  className="heading-4 flex items-center gap-6 text-lg uppercase"
                  onClick={onClose}
                >
                  <span
                    className={`my-5 block h-5 w-5 rounded-full ${color}`}
                  ></span>
                  {page}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}
