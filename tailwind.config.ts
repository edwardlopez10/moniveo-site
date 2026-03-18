import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "SF Pro Display", "Inter", "Arial", "sans-serif"]
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        fadeUp: "fadeUp 700ms ease-out both"
      }
    }
  },
  plugins: []
} satisfies Config;
