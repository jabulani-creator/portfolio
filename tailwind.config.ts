import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: ["Lato", "sans"], // Replace 'Lato' with your desired font name
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans"], // Replace 'Playfair Display' with your desired font name
      },
      colors: {
        cd: {
          cta: "#024751",
          bck: "#E5E5E5",
          bck2: "#f0f4f8",
          txt: "#102a43",
          shade: "#829ab1",
          sp: "#D8EBF1",
        },
      },
    },
  },
  plugins: [],
};
export default config;
