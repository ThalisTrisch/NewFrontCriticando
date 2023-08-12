/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary':"#1D042C",
      'lightprimary':'#4b0c70',
      'secondary':'#',
      'font':"#9BD5FF",
      'transparent':'transparent',
      'black':'#000000',
      'hardblack':'#0B0B0B',
      'smoothblack':'#141414',
      'lightblack':'#202020',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'star':'#d4de1b',
      'bronze':'#cd7f32',
      'silver':'#aaa9ad',
      'gold':'#ffd700'
    },
    extend: {},
  },
  plugins: [],
}