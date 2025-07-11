import plugin from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
      },
      animation: {
        bubble: "bubble 12s ease-in-out infinite",
      },
      keyframes: {
        bubble: {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.7",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            transform: "translateY(-100vh) scale(1.2)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [plugin],
};
