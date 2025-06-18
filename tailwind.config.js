/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // permite alternar tema com classe "dark"
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // garante que tudo dentro de /src seja analisado
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
    },
  },
  plugins: [],
}
