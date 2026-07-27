import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@ut/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@ut/types': path.resolve(__dirname, '../../packages/types/src'),
      '@ut/config': path.resolve(__dirname, '../../packages/config/src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
})
