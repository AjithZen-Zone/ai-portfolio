/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#050505",
        surface:    "#0a0a0a",
        charcoal:   "#121212",
        "stone-950": "#0c0a09",
        "text-primary": "#ffffff",
        "text-secondary": "#a1a1aa",
        "text-muted": "#52525b",
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter:  "-0.035em",
        tight:    "-0.02em",
        wideest: "0.4em",
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
