/* eslint-disable no-undef */
// tailwind.config.js
const { nextui } = require("@nextui-org/react"); // Calling nextui
const withMT = require("@material-tailwind/react/utils/withMT"); // Calling material-tailwind
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
});
