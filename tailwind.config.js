/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        manatee: '#9396A7',
        'tuscan-red': '#6C4245',
        xiketic: '#180E11',
        'antique-white': '#FCF0DE',
        'burnished-brown': '#997470',
        white: '#FFFFFF',
        black: '#000000',
        'bgblue': '#1D2635',
        hotpink: '#D152F3',
      },
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
