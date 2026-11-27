/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F4E6',
          200: '#F2E4BF',
          300: '#E8D092',
          400: '#DFBD67',
          500: '#D4A737', // signature Digithect gold
          600: '#B8861E',
          700: '#8E6314',
          800: '#64430F',
          900: '#3D280A',
        },
        obsidian: {
          950: '#040507',
          900: '#080A0F',
          850: '#0D1017',
          800: '#121620',
          750: '#171C29',
          700: '#1E2435',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FBF4D8 0%, #E2BD67 35%, #C29124 70%, #F5E098 100%)',
        'gold-metallic': 'linear-gradient(90deg, #9F761A 0%, #E7C974 30%, #FFF5CC 50%, #D4A737 75%, #8A5F12 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 20%, rgba(212,167,55,0.08) 0%, rgba(8,10,15,0) 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

