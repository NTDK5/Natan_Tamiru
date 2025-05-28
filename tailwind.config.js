// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#3B82F6", // Blue
                    dark: "#1E40AF"
                },
                secondary: {
                    light: "#10B981", // Green for engineering accent
                    dark: "#065F46"
                },
                background: {
                    light: "#F9FAFB",
                    dark: "#111827"
                },
                surface: {
                    light: "#FFFFFF",
                    dark: "#1F2937"
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["Roboto Mono", "monospace"]
            },
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(20px)'
            }
        }
    },
    plugins: []
}