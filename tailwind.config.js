/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        foreground : "#c3f9c3",
        background : "#87CEEB",
      },
      fontFamily : {
        concertOne : ["Concert One"],
        Abel : ["Abel"],
      }
    },
  },
  plugins: [],
}
