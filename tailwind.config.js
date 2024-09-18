/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myGreen: '#008037'
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        Montserrat: ["Montserrat", 'sans-serif'],
        roboto:["Roboto Mono", 'monospace'],
        open :["Open Sans", 'sans-serif'],
        Lato: ["Lato", 'sans-serif'],
      },
    },
  },
  plugins: [],
}