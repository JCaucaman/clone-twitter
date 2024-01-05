/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "32rem",
        166: "41.5rem",
        256: "64rem",
      },
      maxWidth: {
        128: "32rem",
        160: "40rem",
        100: "25rem",
      },
      width: {
        160: "40rem",
      },
    },
  },
  plugins: [],
};
