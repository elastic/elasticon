/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "spin-slow": "spin 30s linear infinite",
      wiggle: "wiggle 1s ease-in-out infinite",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "4px",
      sm: "24px",
      md: "48px",
      lg: "96px",
      full: "9999px",
    },
    colors: {
      white: "#ffffff",
      black: "#343741",
      blue: {
        100: "#ffffff", // White
        200: "#E8F6FE", // Lighter Blue
        300: "#8CD7FF", // Ice
        400: "#36B9FF", // Sky Blue
        500: "#1BA9F5", // Light Blue
        600: "#0077CC", // Elastic Blue
        700: "#005A9E", // Dark Blue
        800: "#20377D", // Midnight
        900: "#101C3F", // Developer Blue
      },
      orange: "#FF957D",
      peach: "#FF957D",
      pink: "#DD0A73",
      teal: "#7DE2D1",
      yellow: "#FEC514",
      zinc: {
        100: "#F5F7FA",
        400: "#98A2B3",
        900: "#1C1E23",
        950: "#141518",
      },
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },
  },
  plugins: [],
};
