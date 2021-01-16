module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'jaldi': ['Jaldi', 'sans-serif'],
      'sourcesans': ['"Source Sans Pro"', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}