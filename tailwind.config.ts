import type { Config } from "tailwindcss";

/*
  Fleurite — "The Rooted Method" palette.
  Grounded, literary, emotionally-safe. Intentionally distinct from the
  competitor's cream + crimson + gold boutique look.
*/

const pine = {
  50: "#f1f5f1",
  100: "#dfe9e1",
  200: "#bcd0c1",
  300: "#92b19b",
  400: "#628b70",
  500: "#436a51",
  600: "#2f4a3c",
  700: "#263c31",
  800: "#1f3028",
  900: "#182620",
};

const clay = {
  50: "#fbf1ec",
  100: "#f6ddd0",
  200: "#eebfa8",
  300: "#e29f80",
  400: "#d68260",
  500: "#c6764f",
  600: "#ab5d3a",
  700: "#8a4930",
  800: "#6d3b2a",
  900: "#563024",
};

const brass = {
  300: "#d8bd86",
  400: "#c4a35c",
  500: "#b08a46",
  600: "#927137",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand surfaces
        cream: "#f4efe4",
        card: "#fffdf8",
        muted: "#ebe4d5",
        border: "#ddd3c0",
        foreground: "#23271f",
        dark: "#1c231c",
        blush: "#ecd9cb",
        // New brand accents
        pine,
        clay,
        brass,
        // Backwards-compat aliases mapped onto the new palette so any
        // not-yet-redesigned component still renders in-brand.
        rose: pine,
        gold: clay,
        teal: pine,
        coral: clay,
        primary: {
          DEFAULT: "#2f4a3c",
          ...pine,
        },
        secondary: {
          DEFAULT: "#c6764f",
          ...clay,
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
