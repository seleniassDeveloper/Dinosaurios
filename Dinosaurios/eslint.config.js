import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './Dinosaurios', // 🔥 apunta al subproyecto
  build: {
    outDir: '../dist',    // ⬅️ carpeta a nivel raíz para salida del build
    emptyOutDir: true
  },
  plugins: [react()]
});