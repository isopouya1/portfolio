module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      "primary" : "#5F00D8",
      'black': '#000000',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'estedad' : ["estedad", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}