const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      'violet': 'hsl(257, 40%, 49%)',
      'magenta': 'hsl(300, 69%, 71%)',
      white: colors.white,
    },
    screens: {
      'sm': '375px',
      'md': '1024px',
    },
    fontFamily: {
      body: ['Open Sans']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
