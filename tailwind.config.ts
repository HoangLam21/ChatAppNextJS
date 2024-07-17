import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "500": "#301755",
          "400": "#683da3",
          "300": "#9b59cd",
          "200": "#e0b0f6",
        },
        text: {
          b: "#000000",
          w: "#ffffff",
        },
        bg: {
          w: "#ffffff",
          dark: "#301755",
          light: "#683da3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
