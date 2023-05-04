/** @type {import('tailwindcss').Config} */
module.exports = {
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
