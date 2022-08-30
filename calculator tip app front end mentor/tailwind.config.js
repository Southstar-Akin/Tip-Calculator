/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': {'min': '64px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'Strongcyan': 'hsl(172, 67%, 45%)',
      'Verydarkcyan': 'hsl(183, 100%, 15%)',
      'Darkgrayishcyan': 'hsl(186, 14%, 43%)',
      'Grayishcyan': 'hsl(184, 14%, 56%)',
      'Lightgrayishcyan': 'hsl(185, 41%, 84%)',
      'Verylightgrayishcyan': 'hsl(189, 41%, 97%)',
      'White': 'hsl(0, 0%, 100%)',
    },
    extend: {
      fontFamily: {
        mono: ['Mono'],
        monobold: ['MonoBold']
      },
      backgroundImage: {
        'dollar': "url('/images/icon-dollar.svg')",
        'person': "url('/images/icon-person.svg')",
      },
    },
  },
  plugins: [],
}
