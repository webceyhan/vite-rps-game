import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./', // fix for github-pages
  plugins: [vue()],
  css: { preprocessorOptions: { scss: { charset: false } } }
})
