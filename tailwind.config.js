/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/**/*.{html}'
  ],
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco': "url(../img/sanFrancisco.jpg)",
        'sanFranciscoDesktop': "url(../img/sanFranciscoDesktop.jpg)",
        'bali': "url(../img/bali.jpg)",
        'chicago': "url(../img/chicago.jpg)",
        'europe': "url(../img/europe.jpg)",
        'iceland': "url(../img/iceland.jpg)",
        'LA': "url(../img/LA.jpg)",
        'miami': "url(../img/miami.jpg)",
        'norway': "url(../img/norway.jpg)",
        'seattle': "url(../img/seattle.jpg)",
        'switzerland': "url(../img/switzerland.jpg)",
        'sydney': "url(../img/sydney.jpg)",
        'yosemite': "url(../img/yosemite.jpg)",
        'newYork': "url(../img/new_york.jpg)"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      }
    },
  },
  variants: {
    with: ["responsive", "hover", "focus"]
  },
  plugins: [],
}

