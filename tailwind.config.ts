import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Dynamic classes from data files — must be safelisted so Tailwind doesn't purge them
    "bg-conn-yellow", "bg-conn-green", "bg-conn-blue", "bg-conn-purple",
    "bg-wordle-green", "bg-wordle-yellow", "bg-wordle-absent",
    "border-conn-yellow", "border-conn-green", "border-conn-blue", "border-conn-purple",
    "border-wordle-green", "border-wordle-yellow",
    "text-white", "text-nyt-text",
  ],
  theme: {
    extend: {
      colors: {
        "wordle-green": "#6AAA64",
        "wordle-yellow": "#C9B458",
        "wordle-absent": "#787C7E",
        "conn-yellow": "#F9DF6D",
        "conn-green": "#A0C35A",
        "conn-blue": "#B0C4EF",
        "conn-purple": "#BA81C5",
        "nyt-black": "#121212",
        "nyt-text": "#1a1a1b",
        "nyt-bg": "#F9F9F7",
        "tile-border": "#D3D6DA",
        "tile-empty": "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "tile-flip-in": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-90deg)" },
        },
        "tile-flip-out": {
          "0%": { transform: "rotateX(-90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
        "tile-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "tile-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "tile-shake": "tile-shake 400ms ease-in-out",
        "tile-bounce": "tile-bounce 600ms ease-in-out",
        "pop-in": "pop-in 200ms ease-out forwards",
        "slide-down": "slide-down 400ms ease-out forwards",
        "fade-up": "fade-up 500ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
