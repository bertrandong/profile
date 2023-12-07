/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        'special': '45rem',
        'hspecial': '34rem'
      }
    },
    fontFamily: {
      silkscreen: ['Silkscreen', 'sans-serif']
    }
  },
  plugins: [],
}

