module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cinzel: ["Cinzel", "serif"],
        Inter: ["Inter", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dashboard: "#F6F7FB",
      },
    },
  },
  plugins: [],
};
