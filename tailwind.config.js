/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blood: '#d81c1c',
        bloodDark: '#8e1a0e',
        abyss: '#0a0808',
        abyss2: '#0f0b0b',
        abyss3: '#130e0e'
      },
      boxShadow: {
        blood: '0 0 30px rgba(192, 57, 43, 0.35)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Instrument Serif', 'serif']
      }
    }
  },
  plugins: []
};
