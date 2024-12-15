import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#070724",
        "charcoal-gray": "#38384F",
        "light-gray": "#838391",
        "sky-blue": "#419EBB",
        "golden-yellow": "#EDA249",
        "vibrant-purple": "#6D2ED5",
        "bright-red": "#D14C32",
        "deep-red": "#D83A34",
        "burnt-orange": "#CD5120",
        "teal-green": "#1EC2A4",
        "bright-blue": "#2D68F0",
      },
      fontFamily: {
        antonio: ["var(--font-antonio)", "sans"],
        spartan: ["var(--font-spartan)", "sans"],
      },
      fontSize: {
        h1: ["5rem", "6.75rem"], // 80px -> 5rem, 108px -> 6.75rem
        h2: ["2.5rem", "3.25rem"], // 40px -> 2.5rem, 52px -> 3.25rem
        h3: ["0.75rem", "1.5625rem"], // 12px -> 0.75rem, 25px -> 1.5625rem
        h4: ["0.6875rem", "1.5625rem"], // 11px -> 0.6875rem, 25px -> 1.5625rem
        body: ["0.875rem", "1.5625rem"], // 14px -> 0.875rem, 25px -> 1.5625rem
      },

      backgroundImage: {
        stars: "url('/assets/background-stars.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
