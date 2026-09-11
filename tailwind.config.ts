import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "text-main": "var(--color-text)",
        "button-bg": "var(--color-button-bg)",
        "button-text": "var(--color-button-text)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        secondary: ["var(--font-secondary)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        brand: "var(--radius-button)",
      },
      maxWidth: {
        page: "560px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
