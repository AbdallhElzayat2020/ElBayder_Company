/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/@fortawesome/fontawesome-free/css/all.css",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        // center: true,
        // padding: "2rem",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1400px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "black-color": "#000000",
        "border-color": "#474747",
      },

      // keyframes: {
      //   moveUpDown: {
      //     "0%": { transform: "translateY(0)" },
      //     "33%": { transform: "translateY(-30%)" },
      //     "66%": { transform: "translateY(30%)" },
      //     "100%": { transform: "translateY(0)" },
      //   },
      // },
      // animation: {
      //   moveUpDown: "moveUpDown 3s ease-in-out infinite",
      // },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
