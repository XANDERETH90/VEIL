/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)'],
        sans: ['var(--font-space-grotesk)'],
      },
      colors: {
        base: '#0B0D12',
        primary: '#14F195',
        accent: '#7C3AED',
      },
      boxShadow: {
        glow: '0 0 20px rgba(20,241,149,0.45)',
        glowAccent: '0 0 20px rgba(124,58,237,0.4)',
      },
      backgroundImage: {
        'grid': "radial-gradient(transparent 1px, rgba(255,255,255,0.04) 1px)",
      },
    },
  },
  plugins: [],
}