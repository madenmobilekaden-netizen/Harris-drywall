/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apex-red': '#FF2D2D',
        'apex-red-dark': '#CC0000',
        'apex-black': '#111111',
        'apex-gray': '#F5F5F5',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
