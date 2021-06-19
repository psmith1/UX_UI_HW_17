module.exports = {
  mode: 'jit',
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
    colors: {
      black: {
        DEFAULT: '#272523'
      },
      sand: {
        primary: '#F2ECE4'
      },
      blue: {
        primary: '#C1D8D7',
        secondary: '#2A666C'
      }
    },
      height: {
        lg: '160rem'
      }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
