/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#dcdcdc',
        darkBg: '#1a1a1a',
      },
      fontFamily: {
        roboto: 'Roboto',
        robotoSlab: 'Roboto Slab',
        robotoMono: 'Roboto Mono',
        robotoSerif: 'Roboto Serif',
        robotoCondenced: 'Roboto Condenced',
      },
    },
  },
  plugins: [],
};
