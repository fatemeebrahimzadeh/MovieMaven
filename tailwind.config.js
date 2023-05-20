/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        lg: "5rem",
        "2xl": "15rem",
      },
    },
    extend: {
      content: {
        ticket: 'url("/assets/svgs/ticket.svg")',
        trailer: 'url("/assets/svgs/trailer.svg")',
        heart: 'url("/assets/svgs/heart.svg")',
        share: 'url("/assets/svgs/share.svg")',
        "chevron-right": 'url("/assets/svgs/chevron-right.svg")',
      },
      boxShadow: {
        "inset-custom": "inset -5px -50px 100px -15px #000000",
      },
      colors: {
        red: "#dd003f",
        text: "#abb7c4",
        blue: "#4280bf",
        yellow: "#dcf836",
        lighten: "rgba(217, 230, 236, 0.5)",
        light: {
          primary: "#ffffff",
          backgroundColor: "#f2f6f8",
          secondary: "#d9e6ec",
          selected: "#c8d9e1",
        },
        dark: {
          primary: "#020d18",
          secondary: "#0b1a2a",
          triority: "#233a50",
          selected: "#1c3d5d",
          backdrop: "rgba(0, 0, 0, 0.75)",
          // for sample
          // 100: '#F8FAFB',
        },
      },
      borderColor: {
        dark: {
          100: "#405266",
          800: "#0f2133",
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
