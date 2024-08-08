import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 默认为 /
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@http': path.resolve(__dirname, './src/http'),
    },
  },
  build: {
    outDir: 'docs',
  },
  plugins: [vue()],
  server: { //主要是加上这段代码
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api/mo': {
        target: 'http://9.135.155.66:6500',	//实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/mo/, '/api/mo')
      },
    }
  }
})
