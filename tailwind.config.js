/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "10rem",
    },
    extend: {
      colors: {
        light: {
          // for sample
          // 100: '#F2F9FF',
        },
        dark: {
          text: "#abb7c4",
          red: "#dd003f",
          blue: "#4280bf",
          primary: "#020d18",
          secondary: "#0b1a2a",
          selected: "#1c3d5d",
          hovered: "#dcf836",
          // for sample
          // 100: '#F8FAFB',
        },
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
      backgroundImage: {
        header: "url('/assets/images/header-bg.jpg')",
      },
    },
  },
  plugins: [],
};
