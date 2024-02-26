import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        star: 'url("../../public/list.png")',
      },
      boxShadow: {},
      borderRadius: {
        DEFAULT: "16px",
      },
      fontSize: {
        "7.5xl": "5.5rem",
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "14xl": "18rem",
        "16xl": "24rem",
        "20xl": "30rem",
      },

      screens: {
        xs: "380px",
        xxl: "1400px",
      },
      backgroundImage: {
        lines: `linear-gradient(45deg,var(--primary-500) 10.68%,var(--primary-600) 17.61%,var(--primary-700) 24.3%,var(--primary-800) 31.23%,var(--primary-900) 48.82%,transparent 58.23%)`,
       },
      colors: {
        primary: {
          50: "hsl(354, 73%, 74%)",
          100: "hsl(354, 73%, 61%)",
          200: "hsl(354, 73%, 53%)",
          300: "hsl(354, 73%, 48%)",
          400: "hsl(354, 73%, 45%)",
          500: "hsl(354, 73%, 43%)",
          600: "hsl(354, 73%, 41%)",
          700: "hsl(354, 73%, 38%)",
          800: "hsl(354, 73%, 33%)",
          900: "hsl(354, 73%, 25%)",
          950: "hsl(354, 73%, 12%)",
        },
        light: {
          50: "hsl(0, 0%, 99%)",
          100: "hsl(0, 0%, 98%)",
          200: "hsl(0, 0%, 97%)",
          300: "hsl(0, 0%, 95%)",
          400: "hsl(0, 0%, 92%)",
          500: "hsl(0, 0%, 87%)",
          600: "hsl(0, 0%, 82%)",
          700: "hsl(0, 0%, 79%)",
          800: "hsl(0, 0%, 77%)",
          900: "hsl(0, 0%, 76%)",
          950: "hsl(0, 0%, 75%)",
        },
        dark: {
          50: "hsl(0, 0%, 44%)",
          100: "hsl(0, 0%, 43%)",
          200: "hsl(0, 0%, 41%)",
          300: "hsl(0, 0%, 38%)",
          400: "hsl(0, 0%, 33%)",
          500: "hsl(0, 0%, 25%)",
          600: "hsl(0, 0%, 17%)",
          700: "hsl(0, 0%, 12%)",
          800: "hsl(0, 0%, 9%)",
          900: "hsl(0, 0%, 7%)",
          950: "hsl(0, 0%, 6%)",
        },
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        slow: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "slow-spin": "slow 10s alternate ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
};
export default config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 console.log(newVars)
  addBase({
    ":root": newVars,
  });
}