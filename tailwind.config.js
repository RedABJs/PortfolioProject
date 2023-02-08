/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        apearing: "apearing 3s linear infinite",
      },
      keyframes: {
        apearing: {
          "0%": { opacity: "0%" },
          "10%": { opacity: "100%" },
          "100%": { opacity: "100%" },
        },
      },
    },
  },
  plugins: [],
};
