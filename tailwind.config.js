/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "youtube-red": "#ff0000",
        "youtube-red-onclick": "#ff5000",
      },
    },
  },
  plugins: [],
};
