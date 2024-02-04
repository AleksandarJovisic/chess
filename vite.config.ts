import { fileURLToPath, URL } from 'node:url'
import UnpluginVueI18n from '@intlify/unplugin-vue-i18n/vite';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    UnpluginVueI18n({
      include: ['src/locales/**'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

