import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00b176",
          "green-dark": "#009363",
          "green-light": "#e6f7f0",
          orange: "#ff7a1a",
          "orange-dark": "#e8650a",
          yellow: "#ffd84d",
          pink: "#ff6b9d",
          cream: "#fff8e7",
        },
      },
      fontFamily: {
        sans: [
          "Hiragino Kaku Gothic ProN",
          "Hiragino Sans",
          "Meiryo",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.08)",
        cta: "0 6px 0 #c84a00",
      },
    },
  },
  plugins: [],
};
export default config;
