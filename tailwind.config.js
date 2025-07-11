/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      animation: {
        floating: 'floating 6s ease-in-out infinite',
        pulse3D: 'pulse3D 2.5s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulse3D: {
          '0%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.1)', opacity: 0.5 },
          '100%': { transform: 'scale(1)', opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
}

