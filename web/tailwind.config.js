/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "768px",
        xl: "1152px",
      },
      colors: {
        'hh-gray': '#1C1C1C'
      }
    },
  },
  plugins: [],
};
