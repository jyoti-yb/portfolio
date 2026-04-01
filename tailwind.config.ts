import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Base palette — light neutral background
        bg:      "#f2f2f5",
        card:    "#ffffff",
        surface: "#eaeaef",
        border:  "#e0e0e8",
        border2: "#cacad4",
        // Ink scale
        ink:     "#0d0d12",
        ink2:    "#38384a",
        ink3:    "#80809a",
        ink4:    "#adadc0",
        // Accent — violet/indigo for a modern AI/tech vibe
        accent:  "#6c63ff",
        "accent-light": "#ede9ff",
        "accent-mid":   "#a89cff",
        "accent-dark":  "#4b44cc",
        // Secondary warm accent for highlights
        warm:    "#ff6b6b",
        "warm-light": "#fff0f0",
      },
      borderRadius: {
        card:    "14px",
        "card-lg": "20px",
        "card-xl": "24px",
      },
      boxShadow: {
        // Layered soft shadows for depth
        card:   "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 12px rgba(108,99,255,0.10), 0 12px 32px rgba(0,0,0,0.10)",
        nav:    "0 1px 0 rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)",
        glow:   "0 0 0 3px rgba(108,99,255,0.18)",
      },
      animation: {
        "pulse-dot":  "pulseDot 2.2s ease-in-out infinite",
        "fade-up":    "fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both",
        "fade-down":  "fadeDown 0.55s cubic-bezier(0.22,1,0.36,1) both",
        "slide-in":   "slideIn 0.4s cubic-bezier(0.22,1,0.36,1) both",
        "shimmer":    "shimmer 2.2s linear infinite",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.45)" },
          "50%":     { boxShadow: "0 0 0 8px rgba(34,197,94,0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-14px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        // Gradient used for name highlight & accents
        "accent-grad": "linear-gradient(135deg, #6c63ff 0%, #a89cff 50%, #ff6b6b 100%)",
        "accent-subtle": "linear-gradient(135deg, #ede9ff 0%, #fff0f0 100%)",
        "card-shine": "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
