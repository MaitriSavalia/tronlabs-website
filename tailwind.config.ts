import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tron: {
          cyan: "#00f5ff",
          blue: "#0080ff",
          dark: "#050508",
          darker: "#020204",
          grid: "#0a0a1a",
          accent: "#00c8ff",
          muted: "#1a1a2e",
          border: "#1e2a3a",
          text: "#a8b8cc",
        },
      },
      fontFamily: {
        display: ["'Exo 2'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "grid-flow": "gridFlow 8s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "typing": "typing 3s steps(30) forwards",
      },
      keyframes: {
        gridFlow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scanLine: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "#00f5ff44" },
          "50%": { borderColor: "#00f5ffaa" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0,245,255,0.15), transparent)",
        "card-glow":
          "linear-gradient(135deg, rgba(0,245,255,0.05), rgba(0,128,255,0.02))",
      },
    },
  },
  plugins: [],
};
export default config;
