import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@tarojs/components', replacement: '@tarojs/components/dist-h5/react' },
      { find: '@demo',replacement:path.resolve(__dirname, 'packages/demo') },
      { find: '@ui',replacement:path.resolve(__dirname, 'packages/ui/src/components') }
    ],
  },
  // define: {
  //   process: {
  //     env: {}
  //   },
  //   ENABLE_INNER_HTML: true,
  //   ENABLE_ADJACENT_HTML: true,
  //   ENABLE_SIZE_APIS: true,
  //   ENABLE_TEMPLATE_CONTENT: true,
  //   ENABLE_MUTATION_OBSERVER: true,
  //   ENABLE_CLONE_NODE: true,
  //   ENABLE_CONTAINS: true,
  // },
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
