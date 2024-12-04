import colors from 'tailwindcss/colors';
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

delete colors.lightBlue;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./.vitepress/**/*.{js,ts,vue}', './**/*.md'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Lexend', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        accent: colors.indigo,
      },
    },
  },
  plugins: [typography(), forms()],
};
