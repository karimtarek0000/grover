/** @type {import('tailwindcss').Config} */

const withOpacity = (colorVar) => {
  return ({ opacityValue }) => {
    if (opacityValue) return `rgba(var(--${colorVar}),${opacityValue})`;
    return `rgba(var(--${colorVar}))`;
  };
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: withOpacity("color-primary"),
        secondary: withOpacity("color-secondary"),
        third: withOpacity("color-third"),
        white: "var(--color-white)",
      },
      fontFamily: "var(--font-poppins)",
      fontSize: {
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        40: "2.5rem",
        74: "4.625rem",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
