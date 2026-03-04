import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      'everybody-ui': fileURLToPath(new URL('../packages/main.ts', import.meta.url))
    },
    dedupe: ['vue', 'element-plus']
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})
