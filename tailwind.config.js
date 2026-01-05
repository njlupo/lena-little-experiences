/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brandPink: '#e599a7', // From Lena's Logo
          brandMint: '#b2d3c2', // From Lena's Logo
          brandCream: '#fcfaf2',
        }
      },
    },
    plugins: [],
  }