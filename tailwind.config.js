/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    }
  },
  plugins: [require('daisyui')],
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
          'base-100': '#2A303C'
        }
      }
    ],
    darkTheme: 'dark'
  }
}
