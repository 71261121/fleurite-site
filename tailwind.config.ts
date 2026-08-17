import type { Config } from "tailwindcss";

const rose = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87171",
  500: "#ef4444",
  600: "#dc2626",
  700: "#9b1c1c",
  800: "#991b1b",
  900: "#7f1d1d",
};

const gold = {
  50: "#fdfbf3",
  100: "#fbf5e6",
  200: "#f6e7be",
  300: "#edd590",
  400: "#d4af37",
  500: "#bfa13a",
  600: "#a18422",
  700: "#85691c",
  800: "#6b5218",
  900: "#4a3811",
};

const pine = {
  50: '#f2f7f5',
  100: '#e1efe9',
  200: '#c5e0d4',
  300: '#9ac9b8',
  400: '#69ab97',
  500: '#478f7a',
  600: '#357260',
  700: '#2d5b4e',
  800: '#264a41',
  900: '#203d36',
};

const clay = {
  50: '#fbf9f8',
  100: '#f5f0ef',
  200: '#efe6e3',
  300: '#e5d5cf',
  400: '#d7bcba',
  500: '#c59d99',
  600: '#b17e79',
  700: '#95635f',
  800: '#7d5451',
  900: '#684745',
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
        // Brand surface
        cream: "#f9f5f0",
        card: "#ffffff",
        muted: "#f3ede7",
        border: "#e0d8d0",
        foreground: "#1a1a1a",
        dark: "#2d2a33",
        blush: "#edd7cd",
        // Agent 2's custom colors
        evergreen: "#2f4a3c",
        warmWhite: "#fffdf8",
        destructive: "#dc2626",
        success: "#16a34a",
        "muted-foreground": "#71717a",
        // Accents
        rose,
        gold,
        pine,
        clay,
        // Aliases for backwards compatibility
        primary: {
          DEFAULT: "#9b1c1c",
          ...rose,
        },
        secondary: {
          DEFAULT: "#d4af37",
          ...gold,
        },
        teal: {
          DEFAULT: "#9b1c1c",
          ...rose,
        },
        coral: {
          DEFAULT: "#d4af37",
          ...gold,
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
