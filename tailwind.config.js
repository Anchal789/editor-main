/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "travel": {
          "0%" : {
            transform: "translate3d(0,0,0)"
          },
          "100%": {
            transform: "translate3d(0,0,0)"
          },
          "50%" : {
            transform: "translate3d(-1%,0,0)"
          }
        }
      },
      animation: {
        "travel" : 'travel 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}