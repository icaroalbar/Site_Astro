module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulastro: {
          300: '#425FC7',
          500: '#001245',
          700: '#0f1a2e',
        },
        amareloastro: {
          300: '#8e7923',
          500: '#cea80f',
          700: '#b5971c',
        },
        cinzaastro: {
          300: '#e2e2e2',
          500: '#666666',
        },
        brancohp: '#ffffff',
      }
    },
  },
  plugins: [],
}