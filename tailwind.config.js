/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        primary: "#3A3077",
        secondary: "#9381FF",
        layer: "#E2E8F0",
      },
      fontFamily: {
        nunito: ["'Nunito', sans-serif"],
      },
    },
  },
  plugins: [],
};
