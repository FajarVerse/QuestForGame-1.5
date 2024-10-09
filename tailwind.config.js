/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "bebas-neue": ['"Bebas Neue"'],
      "comic-neue": ['"Comic Neue"'],
    },
    extend: {
      colors: {
        primary: "#ff8906",
        dark: "#0f0e17",
        second: "#fffffe",
        description: "#a7a9be;",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
