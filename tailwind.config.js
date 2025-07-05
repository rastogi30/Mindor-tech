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
          DEFAULT: '#6E59A5',
          dark: '#1A1F2C',
          light: '#9b87f5',
        },
        accent: '#0EA5E9',
        text: {
          primary: '#1A1F2C',
          secondary: '#64748b',
          light: '#94a3b8',
        },
        background: {
          light: '#f8fafc',
          white: '#ffffff',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'secondary': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'light': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'primary': '0 20px 25px -5px rgba(110, 89, 165, 0.25)',
        'primary-hover': '0 25px 30px -5px rgba(110, 89, 165, 0.35)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6E59A5, #9b87f5)',
        'gradient-hero': 'linear-gradient(135deg, rgba(110, 89, 165, 0.1), rgba(155, 135, 245, 0.1))',
      },
    },
  },
  plugins: [],
} 