/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
          offWhite: '#FAF9F6',
        "secondary-color": "var(--secondary-color)"
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
