/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  // daisyUI config
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
    darkTheme: 'dark'
  }
}
