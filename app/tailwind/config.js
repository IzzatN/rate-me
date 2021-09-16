
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
        },
        transitionProperty: {
          'height': 'height'
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }