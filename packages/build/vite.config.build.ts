/* eslint-disable */
import { defineConfig } from 'vite'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import { uglify as RollupUglify } from 'rollup-plugin-uglify'
import RollupCopy from 'rollup-plugin-copy'
import reactRefresh from '@vitejs/plugin-react-refresh'

// const path = require('path')

// https://vitejs.dev/config/
const externalPackages = [
  'classnames',
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: externalPackages,
      extensions: ['json', 'js', 'ts'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [
        RollupNodeResolve({
          customResolveOptions: {
            moduleDirectory: 'node_modules'
          }
        }),
        RollupCommonjs({
          extensions: ['.esm.js', '.mjs', '.js', '.ts'],
          include: /\/node_modules\//,
          namedExports: {
            'react': ['useState']
          }
        }),
        RollupJson(),
        RollupUglify(),
        // RollupTypescript({
        //   tsconfig: resolveFile('tsconfig.rollup.json')
        // }),
      ]
    },
    lib: {
      entry: './packages/ui/index.ts',
      name: 'comps.react',
      fileName: 'comps.react',
      formats: ['es', 'umd'],
    },
    outDir: './packages/ui/dist'
  },
})

/* eslint-disable */
