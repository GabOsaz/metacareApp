
module.exports = {
  darkMode: 'class',
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
        "darkmode-primary-color": "#CBB2F5",
        "darkmode-light-bg": "#233040",
        "darkmode-text-color": "#F2FAFF",
        "darkmode-border-color": "#394657",
        'text-mute': '#A3A3C2',
        'text-black': '#060213',
        'input-bg': '#FAFAFC',
        'dark-bg': '#0D1B2A',
        "grey-300": "#B8B4C0",
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