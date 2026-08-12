/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // se usar App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3FAEBC",
        "primary-dark": "#0164A4",
        accent: "#FABD22",
        highlight: "#F56800",
        "highlight-light": "#FEE8D5",
        gray: {
          900: "#1C1C1C", // Texto principal
          700: "#4B4B4B", // Texto secundário
          100: "#F5F5F5", // Fundo leve
        },
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        title: ["var(--font-barlow)", "sans-serif"], // Títulos e marca
        text: ["var(--font-inter)", "sans-serif"], // Parágrafos e UI
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.06)",
        strong: "0 8px 30px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
      });
    },
  ],
};
