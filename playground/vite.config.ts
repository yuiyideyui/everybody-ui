import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'everybody-ui': fileURLToPath(new URL('../packages/main.ts', import.meta.url))
    },
    dedupe: ['vue', 'element-plus']
  }
})
