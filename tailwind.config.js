module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {},
    maxWidth: {},
    minHeight: {},
    maxHeight: {},
    extend: {
      height: {},
      width: {},
      fontFamily: {
        Cinzel: ["Cinzel", "serif"],
        Inter: ["Inter", "serif"],
      },
      colors: {
        dashboard: "#F6F7FB",
        primary: {
          red: "#E50914",
          dark: "#0B0B0B",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(indigo|orange|violet|teal|sky|red|green)-(600)/,
      variants: ["group-hover"],
    },
  ],
};
