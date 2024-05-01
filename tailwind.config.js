/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Hind', 'sans-serif']
      }
    },
    screens: {
      'sm': '480px',
      'md': '680px',
      'lg': '990px',
      'xl': '1024px',
      '2xl': '1280px'
    },
  },
  plugins: []
}

