import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue_700: "#5429cc",

        text_title: "#363F5f",
        background: "#F0F2F5",
        blue: "#5429CC",
        red: "#E52E4D",
        green: "#33CC95",
        blue_light: "#6933FF",
        text_body: "#969cb3",
        shape: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
