/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FBBF24', // Yellow
          dark: '#D97706',
        },
        secondary: {
          DEFAULT: '#8B4513', // Brown
          light: '#A0522D',
        },
        dark: '#111827', // Black
        light: '#FAFAFA', // White/Light
      }
    },
  },
  plugins: [],
}
