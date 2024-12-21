/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/training/**/*.{html,js}",
    "./public/play/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0c1d18',
        'background': '#f4fafa',
        'primary': '#2d675e',
        'secondary': '#8ebbcd',
        'accent': '#44739c',
       },

    },
  },
  plugins: [],
}