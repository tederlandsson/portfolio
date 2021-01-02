module.exports = {
  purge: ['./**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      70: '70vh',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};