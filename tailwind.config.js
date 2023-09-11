/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        // Desktop first
        // "2xl": { max: "1535px" },
        // // => @media (max-width: 1535px) { ... }

        // xl: { max: "1279px" },
        // // => @media (max-width: 1279px) { ... }

        // lg: { max: "1023px" },
        // // => @media (max-width: 1023px) { ... }

        // md: { max: "767px" },
        // // => @media (max-width: 767px) { ... }

        // sm: { max: "639px" },
        // // => @media (max-width: 639px) { ... }

        // xs: { max: "450px" },

        // Mobile first
        xs: { min: "450px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "custom-white": "#FFF",
        "custom-black": "#000",
        "custom-black-1": "#1A1A1A",
        "custom-black-2": "#555555",
        "custom-grey": "#808080",
        "custom-grey-light-1": "#AAAAAA",
        "custom-grey-light-2": "#D4D4D4",
        "custom-blue": "#007BFF",
        "custom-blue-light-1": "#BBDCFF",
        "custom-blue-light-2": "#55A7FF",
        "custom-blue-dark-1": "#0062CC",
        "custom-blue-dark-2": "#003166",
        "custom-blue-dark-3": "#000811",
        "custom-green": "#32C787",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
