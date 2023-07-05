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
        forth: withOpacity("color-forth"),
        sixth: withOpacity("color-sixth"),
      },
      fontFamily: "var(--font-poppins)",
      fontSize: {
        14: "0.875rem",
        16: ["1rem", "2em"],
        18: ["1.125rem", "2em"],
        20: "1.25rem",
        22: "1.375rem",
        40: "2.5rem",
        74: ["4.625rem", "1.2em"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        primary: withOpacity("color-primary"),
        forth: withOpacity("color-forth"),
        fifth: withOpacity("color-fifth"),
        seventh: withOpacity("color-seventh"),
        eighth: withOpacity("color-eighth"),
      },
      gridTemplateColumns: {
        section2: "1fr minmax(12.5rem, 25rem)",
        section3: "minmax(12.5rem, 30rem) 1fr",
        footer: "2fr repeat(2, 11.25rem) 1fr",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
