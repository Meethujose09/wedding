/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {

        cursivenames: ["'Rallocate Personal Use'", "cursive"],
        elegist: ['Elegist', 'serif'],
        northeast: ['"Northeast Oregon"', 'cursive'],
        highpath: ['"Highpath Signature Personal Use"', 'cursive'],
      },
    },
  },
  plugins: [],
}

