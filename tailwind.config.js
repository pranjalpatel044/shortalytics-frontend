/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #4f46e5, #9333ea)", // Indigo to Purple
        "custom-gradient-2": "linear-gradient(to left, #6366f1, #f43f5e)", // Indigo to Rose
        "card-gradient": "linear-gradient(to right, #06b6d4, #3b82f6)", // Cyan to Blue
      },
      colors: {
        navbarColor: "#ffffff",                  // White navbar
        btnColor: "#4f46e5",                     // Indigo-600 (primary buttons)
        btnHover: "#4338ca",                     // Indigo-700
        linkColor: "#3b82f6",                    // Blue-500 (for links)
        accentColor: "#9333ea",                  // Purple-600
        softBackground: "#f9fafb",               // Neutral background
        cardColor: "#f3f4f6",                    // Light gray cards
        textPrimary: "#1f2937",                  // Gray-800 (headings)
        textSecondary: "#4b5563",                // Gray-600 (paragraphs)
      },
      boxShadow: {
        custom: "0 4px 20px rgba(0, 0, 0, 0.1)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.1)",
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
