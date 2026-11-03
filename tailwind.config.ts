import type { Config } from "tailwindcss";

// Design tokens extracted from the Log Homes India logo artwork.
// See /docs/design-tokens.md for provenance of each value.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F3",       // main page background (lighter derivative of the logo bg)
        putty: "#D3CCBA",       // logo background — alt section / footer bg
        brand: {
          DEFAULT: "#3A2A22",   // darkened brand brown — headings, body text
          light: "#644543",     // true logo script color — accents, links
        },
        neutral: {
          DEFAULT: "#69645F",   // tagline/secondary text color
        },
        wood: {
          dark: "#271D28",      // deep shadow / structural lines
          mid: "#6E4E45",
          midLight: "#896C5D",
          light: "#BDA58F",
        },
        gold: {
          DEFAULT: "#B8763F",   // deepened accent for CTAs/buttons
          glow: "#DEA880",      // raw window-glow tone, decorative use only
        },
        sage: {
          DEFAULT: "#4B5A4E",
          dark: "#374443",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
