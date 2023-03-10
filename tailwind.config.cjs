/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        changeContentTab: {
          from: {
            opacity: "0.3"
          },

          to: {
            position: "static", opacity: "1"

          }
        },
      },
      animation: {
        'changeTab': 'changeContentTab 1.0s ease-in-out',
      },
    },
  },
  plugins: [],
}
