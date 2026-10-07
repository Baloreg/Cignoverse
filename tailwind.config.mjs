/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cigno: {
          blue: '#4e84b1',
          dark: '#0f172a',
          card: '#1e293b',
          light: '#f4f7fa',
        }
      }
    },
  },
  plugins: [],
}
