module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
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
        Righteous: ["Righteous", "serif"],
      },
      colors: {
        dashboard: "#F6F7FB",
        primary: {
          red: "#E50914",
          "dark-red": "#7A0006",
          background: {
            500: "#333333",
            700: "#1F1F1F",
            900: "#141414",
          },
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
