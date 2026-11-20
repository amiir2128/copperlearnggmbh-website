/** @type {import('tailwindcss').Config} */
const v = (n) => `rgb(var(--${n}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', './preview/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: v('brand-50'), 100: v('brand-100'), 200: v('brand-200'), 300: v('brand-300'),
          400: v('brand-400'), 500: v('brand-500'), 600: v('brand-600'), 700: v('brand-700'),
          800: v('brand-800'), 900: v('brand-900'), 950: v('brand-950'),
        },
        ink: v('ink'), muted: v('muted'), surface: v('surface'), canvas: v('canvas'), line: v('line'),
        mint: v('mint'),
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        soft: '0 1px 2px rgb(16 10 40 / 0.04), 0 8px 24px -8px rgb(16 10 40 / 0.12)',
        glow: '0 20px 60px -20px rgb(var(--brand-500) / 0.55)',
      },
    },
  },
  plugins: [],
}
