
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'sans-serif'],
        abrilFatface: ['Abril Fatface', 'sans-serif'],
        karantina: ['Karantina', 'sans-serif'],
        abel: ['Abel', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif']
      },
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }
