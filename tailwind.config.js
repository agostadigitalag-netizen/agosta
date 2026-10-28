/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF4FF',
          100: '#DCE8FF',
          200: '#C0D4FF',
          300: '#94B6FF',
          400: '#5E8CFA',
          500: '#3B6DF6',
          600: '#2554E0',
          700: '#1E42B8',
          800: '#1B368F',
          900: '#172E70',
          950: '#0F1D40',
        },
      },
    },
  },
  plugins: [],
};
