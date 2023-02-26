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
        'hh-gray': '#1C1C1C',
        'hh-purple': '#986EC8',
        'hh-lightgray': '#b9b9b9'
      },
      backgroundImage: {
        'headergradient': "url('/headergradient.svg')",
        'blogbackground': "linear-gradient(177deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,1) 98%, rgba(0,0,0,1) 100%), url('/blogbackground1.png')",
      },
      boxShadow: {
        '404': "inset 20px 20px 300px black",

      }
    },
  },
  plugins: [],
};
