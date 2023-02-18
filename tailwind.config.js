/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./views/**/*.{ejs,js}"],
  theme: {
    extend: {
      colors : {
        foreground : "#c3f9c3",
        background : "#155e67",
      },
      fontFamily : {
        concertOne : ["Concert One"],
        Abel : ["Abel"],
      }
    },
  },
  plugins: [],
}
