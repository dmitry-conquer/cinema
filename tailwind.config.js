module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c0b0b",
        "primary-light": "#1b1919",
        secondary: "#3b82f6",
      },
    },
  },
  plugins: [],
};
