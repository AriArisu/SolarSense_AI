/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'solar-dark': '#2C2C2E',
        'solar-gray': '#3A3A3C',
        'solar-text': '#8E8E93',
        'solar-primary': '#FF6B5A',
        'solar-red': '#E60013',
        'solar-border': '#1E90FF',
      },
    },
  },
  plugins: [],
}


