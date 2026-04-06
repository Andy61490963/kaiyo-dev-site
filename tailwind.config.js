/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#FDE1E8',
        'soft-gold': '#F5E6C5',
        'ink-dark': '#0F0F10',
      },
      boxShadow: {
        'glow-pink': '0 30px 120px -10px rgba(253,225,232,0.45)',
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"Noto Serif TC"',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        display: ['"Noto Serif TC"', '"Noto Sans TC"', 'serif'],
      },
    },
  },
  plugins: [],
}
