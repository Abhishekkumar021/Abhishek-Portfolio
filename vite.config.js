import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-deploy/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pdfjs: ['pdfjs-dist/build/pdf.js'],
          // Other chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})

