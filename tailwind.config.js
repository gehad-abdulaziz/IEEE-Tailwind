/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        whiteText: "var(--white-text)",
        blackText: "var(--black-text)",
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        gradFrom: "var(--gradient-from)",
        gradVia1: "var(--gradient-via1)",
        gradVia2: "var(--gradient-via2)",
        gradTo: "var(--gradient-to)",
      })
    },
  },
  plugins: [],
}
