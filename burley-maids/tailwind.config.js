/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redWine: '#6d2a33',
        hookerGreen: '#5a7d7c',
        lavendarWeb: '#dadff7',
        powderBlue: '#a0c1d1',
        frenchGray: '#b5b2c2',
      },
    },
  },
  plugins: [],
}