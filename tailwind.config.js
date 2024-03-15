/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'madimi-one': ['Madimi One', 'sans-serif'],
        'ubuntu':['Ubuntu','sans-serif']
      }
    },
  },
  plugins: [],
}

