import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths so index.html can be opened locally via double-click
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `script.js`,
        chunkFileNames: `script.js`,
        assetFileNames: `styles.[ext]`
      }
    }
  }
})
