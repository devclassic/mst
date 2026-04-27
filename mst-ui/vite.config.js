import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 使用现代编译器 API
        silenceDeprecations: ['legacy-js-api', 'import'],
      },
    },
  },
})
