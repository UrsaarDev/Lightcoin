const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["OpenSans", ...defaultTheme.fontFamily.sans],
      heading: ["GoodTimes", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        grayed: "#CFCEE6",
        dark: "#19182E",
        darker: "#15161A",
        light: "#1E1F24",
        border: "#707070",
        secondary: "#6B6B6B",
        brand: "rgba(239,0,142,1)",
        green: "#0EC674",
        purpleGradient:
          "linear-gradient(0deg, rgba(239,0,142,1) 0%, rgba(0,0,0,0) 30%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
