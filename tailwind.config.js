/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./views/**/*.{ejs,js}"],
  theme: {
    extend: {
      colors : {
        foreground : "#ffffff",
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
