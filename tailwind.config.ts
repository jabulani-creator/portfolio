import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        cd: {
          bck2: "#f0f0eb",
          bck: "#e8e8e3",
          txt: "#0a0a0a",
          shade: "#5c5c5c",
          muted: "#2a2a2a",
          border: "#d4d4ce",
          cta: "#0a0a0a",
          charcoal: "#0a0a0a",
          terminal: "#111111",
          "terminal-fg": "#e8e8e3",
          "terminal-dim": "#8a8a8a",
        },
      },
      fontSize: {
        display: [
          "clamp(2.25rem,5.5vw,3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
