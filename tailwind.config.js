
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'border-color': '#ECEBF5',
        'primary-color': '#6837EF',
        'primary-red': '#F25A68',
        'primary-green': '#25BB87',
        'text-color': '#696D8C',
        'text-mute': '#A3A3C2',
        'text-black': '#060213',
        'input-bg': '#FAFAFC',
      },
      fontFamily: {
        'gelion-black': ['Gelion-black'],
        'gelion-regular': ['Gelion-Regular'],
        'gelion-semibold': ['Gelion-Semibold'],
      },
    },
  },
  plugins: [],
}