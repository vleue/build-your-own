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
    "h-[200px]",
    "h-[250px]",
    "h-[300px]",
    "h-[350px]",
    "h-[400px]",
    "h-[450px]",
    "h-[500px]",
    "h-[550px]",
    "h-[600px]",
    "h-[650px]",
  ],
  plugins: [],
};
export default config;
