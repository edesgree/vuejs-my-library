/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  // daisyUI config
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      {
        mytheme: {
          primary: '#FFC700',
          secondary: '#888888',
          accent: '#1FB2A5',
          neutral: '#191D24',
          info: '#5eead4',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'base-100': '#2A303C',
          '--rounded-box': '1rem' // border radius rounded-box utility class, used in card and other large boxes
        }
      }
    ],
    darkTheme: 'dark'
  }
}
