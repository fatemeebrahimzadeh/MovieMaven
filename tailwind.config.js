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
          yellow: "#dcf836",
          primary: "#020d18",
          secondary: "#0b1a2a",
          triority: "#233a50",
          selected: "#1c3d5d",
          border: "#405266",
          border2: "#0f2133",
          backdrop: "rgba(0, 0, 0, 0.75)",
          // for sample
          // 100: '#F8FAFB',
        },
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
      backgroundImage: {
        header: "url('/assets/images/header-bg.jpg')",
        singleMovieHeader: "url('/assets/images/hero-bg.jpg')",
        footer: "url('/assets/images/ft-bg.jpg')",
      },
    },
  },
  plugins: [],
};
