/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#fbe5d4",
        green: "#eaefd7",
        purple: "#e7e6fc",
        pink: "#f9e8fb",
        lightBlue: "#d3eaff",
        darkBlue: "#bed4f8",
        yellow: "#eac3359f",
        coolPurple: "#646cffaa",
        background: "#fffafa"
      }
    },
  },
  plugins: [],
}

