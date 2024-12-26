/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        rotateUp: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(15deg)" },
        },
      },
      animation: {
        rotateUp: "rotateUp 0.3s ease-in-out",
        slideInRight: "slideInRight 1.5s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
