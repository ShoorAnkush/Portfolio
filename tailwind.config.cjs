module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#1E1E1E",
        darkcard: "#2C2C2C",
        accent: "#A3CEF1",
        accent2: "#FFBA7C",
      },
    },
  },
  safelist: ["bg-darkcard", "bg-accent", "bg-accent2"],
  plugins: [],
};
