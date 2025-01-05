/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#4caf50",
      },
      fontFamily: {
        lato: ["Lato-Regular", "sans-serif"],
        madimi: ["MadimiOne-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
