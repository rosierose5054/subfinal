import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // explicitly use your PostCSS config
  },
  server: {
    hmr: { overlay: false }, // optional: hides the overlay error while fixing
  },
})
