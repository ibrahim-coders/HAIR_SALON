/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background' : "(bg-[url('')])",
      },
      fontFamily: {
        'roboto': ["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [],
}
