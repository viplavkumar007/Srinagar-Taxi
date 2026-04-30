/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5C518',
          dark: '#1A1A1A',
          gray: '#2C2C2C',
          light: '#F8F5EE',
          border: '#E0D9CC',
          muted: '#6B6560',
        },
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
