/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          'black-secondary': '#1a1a1a',
        },
        text: {
          primary: '#ffffff',
          secondary: '#cccccc',
        },
        accent: {
          white: '#ffffff',
          gray: '#808080',
        }
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'simple-pulse': 'simple-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'simple-pulse': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.7' },
        }
      },
      backdropBlur: {
        'aurora': '20px',
      }
    },
  },
  plugins: [],
}
