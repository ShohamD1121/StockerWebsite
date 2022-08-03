/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        green: "#24d878",
        blue: "#006eec",
        lightGreen : '#D6FFDE',
        lightBlue : "#DEE2FF",
        lightRed : '#FFE7E7'
      },
    },
  },
  plugins: [],
};
