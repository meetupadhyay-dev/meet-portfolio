/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ for Dark/Light toggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a192f", // dark background
        foreground: "#ccd6f6", // light text
        primary: "#64ffda", // accent green
      },
    },
  },
  plugins: [],
};
