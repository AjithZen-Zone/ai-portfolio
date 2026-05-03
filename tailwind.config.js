/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2563eb",
        "secondary": "#7c3aed",
        "background": "#0a0a0a",
        "surface": "#161616",
        "on-surface": "#ffffff",
        "on-surface-variant": "#a0a0a0",
      },
      fontFamily: {
        "space": ["Space Grotesk", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(0, 210, 255, 0.3)",
        "glow-secondary": "0 0 20px rgba(157, 80, 187, 0.3)",
        "neon": "0 0 5px rgba(0, 210, 255, 0.5), 0 0 20px rgba(0, 210, 255, 0.2)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slide-up 0.4s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        }
      }
    },
  },
  plugins: [],
}
