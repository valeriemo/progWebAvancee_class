/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EAD637',
        'secondary': '#343633',
        'tertiary': '#5CC8FF',
      },
    },

  },
  plugins: [],
}

