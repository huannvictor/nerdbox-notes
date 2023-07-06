/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#694ED8",
        "custom-purple-darker": "#6600CC",
      },
      screens: {
        "2sm": "375px",
        "3sm": "320px",
      },
    },
  },
  plugins: [],
};
