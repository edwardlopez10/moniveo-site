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
        },
        mapCountryIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        mapPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.08", transform: "scale(2.4)" }
        },
        mapFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" }
        },
        mapLandBreathe: {
          "0%, 100%": { opacity: "0.92" },
          "50%": { opacity: "1" }
        },
        mapHomeBreathe: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.88" }
        },
        mapBeacon: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.7)" }
        },
        mapRipple: {
          "0%": { opacity: "0.55", transform: "scale(0.35)" },
          "70%": { opacity: "0.12" },
          "100%": { opacity: "0", transform: "scale(2.8)" }
        },
        mapNodeBlink: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        fadeUp: "fadeUp 700ms ease-out both",
        mapCountryIn: "mapCountryIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        mapPulse: "mapPulse 2.8s ease-out infinite",
        mapFloat: "mapFloat 8s ease-in-out infinite",
        mapLandBreathe: "mapLandBreathe 6s ease-in-out infinite",
        mapHomeBreathe: "mapHomeBreathe 4.5s ease-in-out infinite",
        mapBeacon: "mapBeacon 1.6s ease-in-out infinite",
        mapRipple: "mapRipple 2.8s ease-out infinite",
        mapNodeBlink: "mapNodeBlink 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
