import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

const defaultBase =
  process.env.NODE_ENV === 'production' ? '/win-predict-ai-icons/' : '/'

export default defineConfig({
  root: resolve(__dirname),
  base: process.env.PLAYGROUND_BASE ?? defaultBase,
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
