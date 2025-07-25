/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-pastel': '#FFE4E1',
        'lavande': '#E6E6FA',
        'peche': '#FFDAB9',
        'menthe': '#F0FFF0',
        'creme': '#FFF8DC',
        'rose-doux': '#FFB6C1',
        'violet-doux': '#DDA0DD',
      },
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}