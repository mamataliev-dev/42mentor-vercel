/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: "#050505",
        white: "#FFFFFF",
        blue: "#0083FA",
        cgray: {
          DEFAULT: "#999999",
          bg: "#F6F5F4",
          border: "#E5E5E5",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
