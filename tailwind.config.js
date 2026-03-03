/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F17",
        surface: "#121A2B",
        surface2: "#0F1524",
        border: "#26324A",
        text: "#EAF0FF",
        muted: "#A9B4D0",
        accent: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
          blue: "#2D7DFF",
          green: "#26D07C",
          yellow: "#F6C453",
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};