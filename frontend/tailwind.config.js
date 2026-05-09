/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        uvt: {
          blue: '#005BBB',
          navy: '#002147',
          gold: '#F2B705',
          gray: '#F5F5F5',
        },
      },

      spacing: {
        section: '6rem',
        container: '1280px',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}