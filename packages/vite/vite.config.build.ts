import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const path = require('path')

const resolve = path.resolve
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    lib: {
      entry: '../core/index.ts',
      name: 'comps.react',
      fileName: 'comps.react',
      formats: ['es', 'umd'],
    },
    outDir: '../core/dist'
  },
})
