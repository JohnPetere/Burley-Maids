
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,ttf}",
    "./pages/fonts/*.{ttf}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/fonts/*.{ttf}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        BrushScript: ['"Brush Script"'],
        SourceCodePro: ['"Source Code Pro"'],
      
       
      },
      colors: {
        redWine: '#6d2a33',
        hookerGreen: '#5a7d7c',
        lavendarWeb: '#dadff7',
        powderBlue: '#a0c1d1',
        frenchGray: '#b5b2c2',
        sortaBigBlue:'#0FA3B1',
        zaffra: '#3A0CA3',
        ghostWhite:'#F7F7FF',
      },
      
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      bigBold: '1000',
    },
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      '4xl': '2rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
}