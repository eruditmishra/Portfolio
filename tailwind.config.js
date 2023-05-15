/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: " 0 0 10px rgba(0,0,0,.09)",
        card: "0 0 10px rgba(0,0,0,.1)",
      },
      animation: {
        animationMorph: "morph 8s ease-in-out infinite",
        animationRotate: "rotate 9s linear infinite",
      },
      keyframes: {
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        rotate: {
          "100%": { transform: "rotate(1turn)" },
        },
      },
    },
  },
  plugins: [],
};
