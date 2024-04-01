/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['Lilita One'],
      },
      cursor: {
        PointerCursor: 'url(./img/pointer.png), pointer',
      },
    },
  },
  plugins: [],
};
