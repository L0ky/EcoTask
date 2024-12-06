// import * as users from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8B5FBF',
          DEFAULT: '#4299e1',
          dark: '#8B5FBF',
        },
        secondary: {
          light: '#f6ad55',
          DEFAULT: '#ed8936',
          dark: '#dd6b20',
        },
        // Vous pouvez ajouter plus de couleurs ici
        accent: {
          light: '#fbb6ce',
          DEFAULT: '#f687b3',
          dark: '#d53f8c',
        },
        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#e5e5e5',
          dark: '#a3a3a3',
        },
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
}

