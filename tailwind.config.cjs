/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dead: "var(--dead)",
        semidead: "var(--semidead)",
        alive: "var(--alive)",
      },
      fontFamily: {
        kollektif: 'Kollektif',
        introBold: 'IntroBold',
        jetBrainsMono: 'JetBrainsMono'
      },
    },
  },
  plugins: [],
}