/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor:{
        "primary":"#344054",
        "secondary":"#667085",
      },
      backgroundColor:{
        "primary":"#5087f2",
        "secondary":"#E4E7EC",
        "btn":"#02BF67",
      }

    },
  },
  plugins: [],
}

