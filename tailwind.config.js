/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hh-gray": "#1C1C1C",
        "hh-purple": "#986EC8",
        "hh-lightgray": "#b9b9b9",
      },
      backgroundImage: {
        headergradient: "url('/headergradient.svg')",
        blogbackground:
          "linear-gradient(177deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 2%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,1) 98%, rgba(0,0,0,1) 100%), url('/blog/blogbackground1.png')",
      },
      boxShadow: {
        404: "inset 20px 20px 300px black",
      },
    },
  },
  plugins: [],
};
