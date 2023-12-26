/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "32rem",
      },
      maxWidth: {
        128: "32rem",
      },
      height: {
        41: "41.5rem",
      },
      width: {
        37: "37.4rem",
      },
    },
  },
  plugins: [],
};
