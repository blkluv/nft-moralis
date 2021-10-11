module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#502675",
        "primary-dark": "#28133a",
        "primary-900": "#271339",
        "primary-lightest": "#a43ad6",
        pinkish: "#e056eb",
        blackish: "#131515",
        grayish: "#100117",
        secondary: "#00AACB",
        "secondary-dark": "#1FDBDF",
        teal: "#339989",
        light: "#FFFAFB",
      },
      scale: {
        102: "1.01",
      },
      boxShadow: {
        "3xl": "0px 5px 8px rgba(0,0,0,0.4)",
        "4xl": "0px 0px 15px rgba(0,0,0,0.4)",
      },
    },
  },
  variants: {
    scrollbars: ["rounded"],
    border: ["focus"],
    outline: ["focus"],
    extend: {
      boxShadow: ["hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

// background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
