import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH permite publicar em subdiretório (ex.: GitHub Pages: BASE_PATH=/Amelie-Eventos-Gastronomia/)
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
