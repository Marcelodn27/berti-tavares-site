import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: "#4A1420",
        wineDeep: "#330E18",
        cream: "#F6ECDD",
        gold: "#C9A873",
        textDark: "#2B1116",
        textMuted: "#7C6B66",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        brand: ["var(--font-brand)", "Bodoni MT", "Didot", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "Helvetica", "Arial", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
