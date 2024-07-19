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
      boxShadow: {
        "light-xs": "0 0px 5px 1px rgba(200, 200, 200, 0.1)",
        "light-s": "0 0px 5px 2px rgba(200, 200, 200, 0.1)",
        "light-3xl": "0 0px 20px 3px rgba(200, 200, 200, 0.2)",
        "light-4xl": "0 0px 50px 1px rgba(200, 200, 200, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
