/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Chocolate_Regular: ['TT Chocolates Regular'],
        Chocolate_Demi: ['TT Chocolates DemiBold'],
        Chocolate_Bold: ['TT Chocolates Bold'],
        Chocolate_Medium: ['TT Chocolates Medium'],
        Chocolate_Light: ['TT Chocolates Light'],
      },
    },
  },
  plugins: [],
};

