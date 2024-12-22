/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        material: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#121212', // Material Design 3 dark theme background
        },
        surface: {
          light: '#ffffff',
          dark: '#121212', // Material Design dark theme background
        },
        primary: {
          light: '#1976d2',
          dark: '#90caf9',
        },
        secondary: {
          light: '#9c27b0',
          dark: '#ce93d8',
        },
        error: {
          light: '#d32f2f',
          dark: '#ef5350',
        },
        elevation: {
          1: 'rgba(255, 255, 255, 0.05)',
          2: 'rgba(255, 255, 255, 0.07)',
          3: 'rgba(255, 255, 255, 0.08)',
          4: 'rgba(255, 255, 255, 0.09)',
          5: 'rgba(255, 255, 255, 0.11)',
        },
      },
      backgroundColor: {
        'dark-elevation-1': 'rgba(255, 255, 255, 0.05)',
        'dark-elevation-2': 'rgba(255, 255, 255, 0.07)',
        'dark-elevation-3': 'rgba(255, 255, 255, 0.08)',
        'dark-elevation-4': 'rgba(255, 255, 255, 0.09)',
        'dark-elevation-5': 'rgba(255, 255, 255, 0.11)',
      },
    },
  },
  plugins: [],
};