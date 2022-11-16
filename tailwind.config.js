/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
    },
    container: {
      center: true,
    },
    colors: {
      black: "#000",
      white: "#FFF",
      gray: {
        50: "#F6F6F6",
        100: "#EDF2F7",
        900: "#171923",
        button: "#E2E8F0",
      },
      teal: {
        100: "#B2F5EA",
        200: "#81E6D9",
        300: "#4FD1C5",
        400: "#38B2AC",
        900: "#1D4044",
        button: "#179BA5",
      },
      "gradient-left": "#031617",
      "gradient-right": "#2A3644",
      "background-off-white": "#FDFDFD",
      "background-blue": "#2A3644",
      "footer-blue": "#1F2934",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      med: "1rem",
      lg: "1.125rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3.125rem",
    },
    textColor: {
      black: "#2A3644",
      teal: "#169AA4",
      gray: "#4A5568",
      white: "#FFF",
    },
    borderWidth: {
      1: "1px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif"],
      },
      maxWidth: {
        max: "1080px",
      },
      height: {
        hero: "775px",
        "hero-button": "35px",
      },
      width: {
        "hero-button": "35px",
      },
      margin: {
        "hero-button-arrow": "11px",
        "hero-button": "430px",
      },
      lineHeight: {
        display: "64px",
      },
      spacing: {
        "hero-shape": "250px",
      },
    },
  },
  plugins: [],
};
