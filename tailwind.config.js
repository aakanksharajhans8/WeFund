/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        navyblue: '#001f3f',
        skyblue: '#87ceeb',
        customBlue: 'rgba(17, 45, 68, 1)',
        darkSkyBlue: '#0092ca',
      },
    },
  },
  plugins: [],
}

