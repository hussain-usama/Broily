/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#7F7F58",
        },
        screens: {
          'custom': '300px',   
          'custom-max': { 'max': '650px' }
        },
      },
    },
    plugins: [],
  };
  