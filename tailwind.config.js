/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // si usas la carpeta /app
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#718096", // ejemplo de color personalizado
      },
    },
  },
  plugins: [],
}