import path from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import { uglify as RollupUglify } from 'rollup-plugin-uglify'
import RollupCopy from 'rollup-plugin-copy'

const resolveFile = p => path.resolve(__dirname, '.', p)

const externalPackages = [
  'classnames',
  'react',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]
const entries = path.join(__dirname, './packages/ui/src/components/index.ts')

export default {
  input: entries,
  output: [
    {
      file: './packages/ui/dist/comps.react.umd.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: './packages/ui/dist/comps.react.es.js',
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
      tsconfig: path.join(__dirname, 'tsconfig.rollup.json')
    }),
    RollupCopy({
      verbose: true,
      targets: [
        {
          src: resolveFile('packages/ui/src/styles'),
          dest: resolveFile('packages/ui/dist')
        },
        {
          src: resolveFile('packages/ui/src/components/*/*.less'),
          dest: resolveFile('packages/ui/dist/styles/components')
        }
      ]
    }),
  ]
}
