module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        Poppins: ["Poppins", "sans-serif"],
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
};
