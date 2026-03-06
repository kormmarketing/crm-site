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
        background: "#0A0A0F",
        surface: "#0F1117",
        "surface-elevated": "#10131A",
        "surface-card": "rgba(16, 19, 26, 0.6)",
        text: "#F5F5F7",
        "text-muted": "#94A3B8",
        "text-subtle": "#64748B",
        accent: "#3B82F6",
        "accent-light": "#60A5FA",
        "accent-cyan": "#22D3EE",
        "accent-purple": "#A78BFA",
        "glow-blue": "rgba(59, 130, 246, 0.4)",
        "glow-cyan": "rgba(34, 211, 238, 0.3)",
        "glow-purple": "rgba(167, 139, 250, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(34, 211, 238, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(167, 139, 250, 0.05) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 0 60px -15px rgba(59, 130, 246, 0.4)",
        "glow-cyan": "0 0 40px -10px rgba(34, 211, 238, 0.3)",
        "glow-card": "0 0 0 1px rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
