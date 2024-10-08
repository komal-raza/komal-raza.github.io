/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        // primary: "#070d1c",
        primary: "#07051c",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        // tertiary:"#121330",
        headingText: "#8d80ad",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/services/herobg.png')",
        "tech-pattern": "url('/src/assets/techbg.jpg')",
      },
    },
  },
  plugins: [],
};
