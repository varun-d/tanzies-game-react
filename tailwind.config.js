/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Karla', 'sans-serif']
    },
    extend: {
      colors: {
        'mybg'    : '#0B2434',
        'myblack' : '#2B283A',
        'mygreen' : '#59E391',
        'myblue'  : '#5035FF',
        'mygrey'  : '#F5F5F5'
      }
    },
  },
  plugins: [],
}

