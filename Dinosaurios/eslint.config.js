import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.', // asegura que parte desde el root
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})