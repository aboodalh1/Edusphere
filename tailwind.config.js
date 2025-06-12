/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#250F54',
        'primary-light': '#6666CC',
        'background-subtle': '#F3ECFF',
        'accent-teal': '#33D3D3',
      },
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
        'teshrin': ['Teshrin AR LT', 'Noto Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 