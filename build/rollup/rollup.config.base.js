import path from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import { uglify as RollupUglify } from 'rollup-plugin-uglify'
import RollupCopy from 'rollup-plugin-copy'
import RollupPluginDemo from './rollup-plugin-demo'
import RollupPluginStyle from './rollup-plugin-style'

const cwd = process.cwd()
const resolveFile = filePath => path.join(cwd, filePath)

const externalPackages = [
  'classnames',
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]
const entries = path.join(cwd, '/packages/ui/src/index.ts')

export default {
  input: entries,
  output: [
    {
      file: path.join(cwd, '/packages/ui/dist/tard.umd.js'),
      format: 'cjs',
      sourcemap: true
    },
    {
      file:  path.join(cwd, '/packages/ui/dist/tard.es.js'),
      format: 'es',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    }
  ],
  external: externalPackages,
  extensions: ['json', 'js', 'ts'],
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
    RollupTypescript({
      tsconfig: path.join(cwd, 'tsconfig.rollup.json')
    }),
    RollupCopy({
      verbose: true,
      targets: [
        {
          src: resolveFile('packages/ui/src/styles'),
          dest: resolveFile('packages/ui/dist')
        }
      ]
    }),
    RollupPluginStyle({ watch: process.env.NODE_ENV === 'development' }),
    RollupPluginDemo({ watch: process.env.NODE_ENV === 'development' }),
  ]
}
