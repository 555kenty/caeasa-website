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
        brown: {
          DEFAULT: "#7a3b1e",
          dark: "#4e2309",
          light: "#a0552e",
        },
        earth: {
          DEFAULT: "#c47a45",
          light: "#e8c4a0",
          xl: "#f7ede2",
        },
        green: {
          DEFAULT: "#3d7a2e",
          dark: "#1e4a14",
          light: "#6aaa55",
          xl: "#e8f3e4",
        },
        cream: {
          DEFAULT: "#faf6f0",
          2: "#f0e8dc",
        },
        ink: {
          DEFAULT: "#1e1208",
          2: "#4a3020",
        },
        muted: "#9a8070",
      },
      animation: {
        "scroll": "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
