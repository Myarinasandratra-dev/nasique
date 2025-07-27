/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#5BA582", // vert
      },
      fontFamily: {
        monumentregular: ["MonumentExtended-Regular", "sans-serif"],
        monumentultrabold: ["MonumentExtended-Ultrabold", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
