/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-main': '#078F38',
        'yellow-main': '#A69A12',
        'red-main': '#A00706',
        'grey-main': '#909090',
      },
      scale: {
        flip: '-1',
      },
    },
  },
  plugins: [],
  safelist: ['bg-green-main', 'bg-yellow-main', 'bg-red-main', 'bg-grey-main']
}