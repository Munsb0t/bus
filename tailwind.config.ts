import type { Config } from "tailwindcss";

/**
 * BusTrack design tokens.
 * Palette is intentionally calm and trust-forward: a confident transit blue
 * as the brand color, with clear semantic colors for the bus statuses so a
 * student can read "active / delayed / cancelled" at a glance.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand — transit blue
        brand: {
          50: "#eef4ff",
          100: "#dae6ff",
          200: "#bdd2ff",
          300: "#90b4ff",
          400: "#5b8bff",
          500: "#356bff",
          600: "#1f4ff0",
          700: "#193dd1",
          800: "#1a35a9",
          900: "#1b3285",
        },
        // App surfaces
        ink: {
          900: "#0f172a", // primary text
          700: "#334155", // secondary text
          500: "#64748b", // muted text
          400: "#94a3b8", // faint text / icons
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f1f5f9",
          page: "#f4f5f7",
        },
        // Status semantics
        success: {
          50: "#ecfdf3",
          100: "#d1fadf",
          500: "#16a34a",
          600: "#15803d",
          700: "#166534",
        },
        warning: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f59e0b",
          600: "#ea580c",
          700: "#c2410c",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
      },
      fontSize: {
        // Mobile-friendly scale mapped to the spec
        "page-title": ["1.75rem", { lineHeight: "2.125rem", fontWeight: "700" }], // 28px
        "section-title": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700" }], // 20px
        "card-title": ["1.0625rem", { lineHeight: "1.5rem", fontWeight: "600" }], // 17px
        body: ["0.9375rem", { lineHeight: "1.4rem" }], // 15px
        small: ["0.8125rem", { lineHeight: "1.1rem" }], // 13px
      },
      maxWidth: {
        app: "430px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.06)",
        nav: "0 -1px 0 rgba(15,23,42,0.06), 0 -8px 24px rgba(15,23,42,0.06)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.8)", opacity: "0" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-in": "fade-in 0.25s ease-out both",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
