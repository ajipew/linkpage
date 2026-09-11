/**
 * ═══════════════════════════════════════════════════════════════
 *  THEME CONFIGURATION
 *  Edit these values to restyle the page — colors, fonts, shapes.
 *  No component code needs to change.
 * ═══════════════════════════════════════════════════════════════
 */

export type ButtonStyle = "solid" | "outline" | "soft";
export type BackgroundStyle = "solid" | "gradient" | "pattern";

export interface ThemeConfig {
  colors: {
    primary: string; // MadeMint Green
    secondary: string; // Charcoal
    accent: string; // Mist Gray
    background: string; // Soft Cream
    surface: string; // card / button surface
    text: string;
    buttonBg: string;
    buttonText: string;
  };
  darkColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    buttonBg: string;
    buttonText: string;
  };
  fonts: {
    heading: string; // Poppins Bold
    secondary: string; // Montserrat Medium
    body: string; // Poppins Regular
  };
  borderRadius: string; // e.g. "16px", "9999px" for pill buttons
  buttonStyle: ButtonStyle;
  backgroundStyle: BackgroundStyle;
  /** "light" | "dark" | "system" */
  defaultMode: "light" | "dark" | "system";
}

export const themeConfig: ThemeConfig = {
  colors: {
    primary: "#65D6AD", // MadeMint Green
    secondary: "#171717", // Charcoal
    accent: "#D9E7E0", // Mist Gray
    background: "#F7F7F3", // Soft Cream
    surface: "#FFFFFF",
    text: "#171717",
    buttonBg: "#FFFFFF",
    buttonText: "#171717",
  },
  darkColors: {
    primary: "#65D6AD",
    secondary: "#F7F7F3",
    accent: "#2A2A2A",
    background: "#121212",
    surface: "#1C1C1C",
    text: "#F7F7F3",
    buttonBg: "#1C1C1C",
    buttonText: "#F7F7F3",
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    secondary: "'Montserrat', sans-serif",
    body: "'Poppins', sans-serif",
  },
  borderRadius: "16px",
  buttonStyle: "solid",
  backgroundStyle: "gradient",
  defaultMode: "light",
};
