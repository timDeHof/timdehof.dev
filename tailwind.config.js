/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: "#1d1836",
        secondary: "#05bb64",
        tertiary: "#444444",
      },
      keyframes: {
        fade: {
          // @ts-ignore
          from: { opacity: 0 },
          // @ts-ignore
          to: { opacity: 1 },
        },
      },
      animation: {
        fade: "fade 0.3s ease-in normal",
      },
      boxShadow: {
        "white-md":
          "0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)",
      },
      screens: {
        xs: "425px",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)"],
        mono: ["var(--font-shadows)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

module.exports = config;
