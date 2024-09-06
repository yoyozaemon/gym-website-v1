/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Use 'media' for system-based dark mode
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#E3F2FD",
          200: "#BBDEFB",
          300: "#90CAF9",
          400: "#64B5F6",
          500: "#42A5F5",
          600: "#2196F3",
          700: "#1E88E5",
          800: "#1976D2",
          900: "#1565C0",
        },
        gray: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        green: {
          100: "#E8F5E9",
          200: "#C8E6C9",
          300: "#A5D6A7",
          400: "#81C784",
          500: "#66BB6A",
          600: "#4CAF50",
          700: "#43A047",
          800: "#388E3C",
          900: "#2C6B2F",
        },
        red: {
          100: "#FFEBEE",
          200: "#FFCDD2",
          300: "#EF9A9A",
          400: "#E57373",
          500: "#EF5350",
          600: "#F44336",
          700: "#E53935",
          800: "#D32F2F",
          900: "#B71C1C",
        },
      },
      fontFamily: {
        sans: ['"Roboto"', "Arial", "sans-serif"],
        serif: ['"Merriweather"', "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
