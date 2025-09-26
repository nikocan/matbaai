import type { Config } from "tailwindcss";

/**
 * Bu dosya TailwindCSS için tema ve içerik kaynaklarını tanımlar.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1f2937",
          accent: "#6366f1",
          soft: "#f3f4f6"
        }
      }
    }
  },
  plugins: []
};

export default config;
