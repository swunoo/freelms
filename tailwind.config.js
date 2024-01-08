/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@zach.codes/react-calendar/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'btn-add': '#0F0326',
        'btn-update': '#E9B44C',
        'btn-delete': '#9B2915',
        'btn-cancel': '#2E2F2F',
        'btn-confirm': '#284B63',
        'vanilla': '#E4D6A7',
        'dutch': '#EFE5C2',
        'parchment': '#F5ECD0',
        'eggshell': '#FAF3DD'
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

