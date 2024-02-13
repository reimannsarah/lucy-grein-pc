/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#1B3A06",
        lightgreen: "#769C1D",
        yellow: "#F1BD2E",
        orange: "#F26B3A",
        pink: "#F7B8A8",
        lightblue: "#90BCD5",
        darkblue: "#215b7d",
        purple: "#e7e6fc",
        coolPurple: "#646cffaa",
        background: "#fffafa"
      },
      fontFamily: {
        header: ["Karsten"],
        subheader: ["Palatino"],
        body: ["Montserrat"],
        bigheader: ["Retro"]
      }
    },
  },
  plugins: [],
}

