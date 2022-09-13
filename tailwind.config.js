/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "manatee": "#9396A7",
        "tuscan-red": "#6C4245",
        "xiketic": "#180E11",
        "antique-white": "#FCF0DE",
        "burnished-brown": "#997470",
        "white": "#FFFFFF",
        "black": "#000000",
      },
      keyframes:{
        Entering: {
          From: "opacity-0 scale-95" ,
          To: "opacity-100 scale-100"
        },
        Leaving: {
          From: "opacity-100 scale-100",
          To: "opacity-0 scale-95"
        }
      },
      Animation: {
        Entering: "Entering 2s ease-out",
        Leaving: "Leaving 1s ease-in"
      }

      }
    },
    plugins: [],
  }
