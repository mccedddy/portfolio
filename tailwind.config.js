/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0e162d",
        darker: "#0c1325",
        darkest: "#0b1120",
        light: "#0f172a",

        accentBlue: {
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
        },

        tile: {
          DEFAULT: "#1e293b",
          light: "#334155",
        },

        textColor: {
          DEFAULT: "#8f9eb3",
          light: "#cad4e0",
          dark: "#64748b",
        },

        customOrange: "#f05539",
        customYellow: "#eba32b",
        customGreen: "#006400",

        customBlue: {
          light: "#0aa7cf",
          DEFAULT: "#2c65f3",
          dark: "#3b77a9",
        },

        customViolet: {
          light: "#9f73d9",
          DEFAULT: "#9B4F96",
          dark: "#7b7fb5",
        },

        customPink: {
          DEFAULT: "#CB6699",
          dark: "#99425B",
        },

        customBootstrap: "#7411F6",
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
