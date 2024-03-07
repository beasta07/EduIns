/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '567px',
      'md': '768px',
      'lg': '904px',
      'xl': '1000px',
      '2xl': '1110px',
    },
    extend: {
            colors: {
        'blue': '#0D5EF4',
        'tblack': '#0E2238',
      },
    },
  },
  plugins: [],
}

