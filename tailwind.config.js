/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      animation: {
        word: 'word 9s ease-in-out infinite',
      },
      keyframes: {
        word: {
          '0%, 16.667%, 100%': { 
            opacity: '1' 
          },
          '33.333%, 83.333%': { 
            opacity: '0' 
          },
        } 
      },
      colors: {
        'new-black': ['#0d0d0d'],
        'scroll-color': ['#707070'],
        'develop-blue-1': ['#007cf0'],
        'develop-blue-2': ['#00dfd8'],
        'preview-purple': ['#7928ca'],
        'preview-pink': ['#ff0080'],
        'ship-orange': ['#ff4d4d'],
        'ship-yellow': ['#f9cb28'],
      },
      fontFamily: {
        'gilroy': ['gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
