import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  root: resolve(__dirname),
  base: process.env.NODE_ENV === 'production' ? '/win-predict-ai-icons/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
    },
  },
  build: {
    outDir: resolve(__dirname, '../playground-dist'),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
})
