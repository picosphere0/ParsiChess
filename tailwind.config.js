/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public.{html,js}",
    "./public/aboutUs.{html,js}",
    "./public/play.{html,js}",
    "./public/training/lessons.{html,js}",
    "./public/training/puzzle.{html,js}",
  ],

  theme: {
    extend: {
      colors: {
        'text': '#f5e8e9',
        'background': '#1d090a',
        'primary': '#e4898a',
        'secondary': '#991719',
        'accent': '#ee3235',
      },


    },
  },
  plugins: [],
}