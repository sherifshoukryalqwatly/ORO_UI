import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      colors: {
        Background: "#F9FAFB",
        primary: "#1F2937",     // kitchen brand color
        secondary: "#6B7280",
        accent: "#D4A373",
        dark: "#1f2937",
        light: "#f9fafb",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [lineClamp],
};

export default config;