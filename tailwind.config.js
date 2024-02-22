/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
  ],
  theme: {
    screens:{
      vs: '370px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',

    },
    extend: {

    },
  },
  plugins: [],
}

