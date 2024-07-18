import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "500": "#301755",
          "400": "#683da3",
          "300": "#9b59cd",
          "200": "#e0b0f6",
          "100": "#f8f2ff",
        },
        text: {
          b: "#000000",
          w: "#ffffff",
        },
        bg: {
          w: "#ffffff",
          dark: "#301755",
          light: "#683da3",
          "white-blur": "#ffffff26",
        },
      },
      width: {
        "400": "400px",
        "300": "300px",
      },
      height: {
        "400": "400px",
        "580": "580px",
      },
    },
    backgroundImage: {
      "auth-bg": "url('/AuthBackground.jpg')",
    },
  },
  plugins: [nextui(), require("tailwind-scrollbar")],
};
export default config;
