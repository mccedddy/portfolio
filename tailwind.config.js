/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#181233",
        customDarker: "#0a061c",
        customDarkest: "#090517",

        customOrange: "#f05539",
        customYellow: "#eba32b",
        customGreen: "#386659",

        customBlue: {
          light: "#0984cf",
          DEFAULT: "#2c65f3",
          dark: "#3b77a9",
        },

        customViolet: {
          light: "#9f73d9",
          DEFAULT: "#673ec6",
          dark: "#7b7fb5",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
