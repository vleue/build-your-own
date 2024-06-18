import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  safelist: [
    "h-[180px]",
    "h-[240px]",
    "h-[300px]",
    "h-[360px]",
    "h-[420px]",
    "h-[480px]",
    "h-[540px]",
    "h-[600px]",
    "h-[660px]",
    "h-[720px]",
    "h-[780px]",
    "h-[840px]",
    "w-[240px]",
    "w-[440px]",
  ],
  plugins: [],
};
export default config;
