import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-image': "url('https://cdn.vectorstock.com/i/1000v/07/81/seamless-weather-forecast-background-vector-2000781.jpg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
