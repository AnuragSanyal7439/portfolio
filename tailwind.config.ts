import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#5f6f89",
        brand: "#1f5eff",
        signal: "#0f9f6e",
        paper: "#f7f9fc"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
