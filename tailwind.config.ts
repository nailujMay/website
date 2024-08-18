import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        text: "#363535",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        roboto_mono: ["var(--font-roboto_mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
