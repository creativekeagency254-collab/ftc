/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#25D366', // WhatsApp green
        'secondary': '#FAF5EE', // Eggshell white
        'success': '#22c55e',
        'warning': '#f59e0b',
        'error': '#ef4444',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        breathing: 'breathing 4s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out',
        fadeIn: 'fadeIn 0.5s ease-out',
        scaleUp: 'scaleUp 0.3s ease-out',
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 5px rgba(37, 211, 102, 0.2)',
        'button-hover': '0 4px 10px rgba(37, 211, 102, 0.3)',
      },
    },
  },
  plugins: [],
};