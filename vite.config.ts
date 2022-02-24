import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@tarojs/components', replacement: '@tarojs/components/dist-h5/react' },
      { find: '@demo',replacement:path.resolve(__dirname, 'packages/demo') }
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 此处也可设置直角、边框色、字体大小等
          'primary-color': '#102DF5',
          'primary-color-light': '#F7F8FF',
          'black-color': '#333'
        },
        javascriptEnabled: true
      }
    }
  },
  plugins: [react()]
})
