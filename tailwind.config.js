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
        white: '#FFFFFF',
        black: '#000000',
        'my-blue': '#091221',
        'my-pink': '#D152F3',
      },
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
