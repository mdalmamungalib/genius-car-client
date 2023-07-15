/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a99eed",

          "secondary": "#b6dbf9",

          "accent": "#f4e877",

          "neutral": "#2b2c36",

          "base-100": "#e5eaf0",

          "info": "#7089d7",

          "success": "#1b7958",

          "warning": "#e5c006",

          "error": "#e66e60",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

