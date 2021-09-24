module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Heebo', 'sans-serif'],
      body: ['Heebo', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
