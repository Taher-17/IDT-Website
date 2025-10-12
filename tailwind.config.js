// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultBackground: "var(--background)",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
