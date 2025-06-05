/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F4EC",
        "text-primary": "#5F6A60",
        "text-secondary": "#666666",
        mint: "#C8E6D7",
        sky: "#CDE6F0",
        cream: "#F5EEDC",
        salmon: "#D9B2B2",
        lavender: "#D8D8E8",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Nunito Sans", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
