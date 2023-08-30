/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        DEFAULT: "#E9E2F3",
      },
      primary: {
        DEFAULT: "#7000FF",
        100: "#11002D",
        200: "#6E01F8",
        300: "#380C7E",
        400: "#1F0F39",
      },
    },
    extend: {
      fontSize: {
        "base": ["1rem", "1.5"],
        "xl": ["1.25rem", "1.5"],
        "3xl": ["32px", "1.5"],
        "5xl": ["3rem", "1.5"],
        "6xl": ["64px", "1.5"],
        "8xl": ["6rem", "1.5"],
      },
      fontFamily: {
        sans: ["Noto Sans TC", defaultTheme.fontFamily.sans],
        serif: ["Shrikhand", defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

