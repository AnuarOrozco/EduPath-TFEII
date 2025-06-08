/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Ajusta según tu estructura
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        'primary-hover': "#1D4ED8",
        secondary: "#10B981",
        'secondary-hover': "#059669",
        accent: "#7C3AED",
        error: "#EF4444",
        warning: "#F59E0B",
        success: "#10B981",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
