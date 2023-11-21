/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      opacity: ['hover', 'focus'],
      display: ['hover', 'focus'],
    },
  },
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;'

       
      },
      colors: {
        "primary-color": "var(--primary-color)",
          offWhite: '#FAF9F6',
        "secondary-color": "var(--secondary-color)"
      },
    },
  }

}
