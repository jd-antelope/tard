import NodePath from 'path'
import react from 'react'
import reactDom from 'react-dom'
import RollPostcss from 'rollup-plugin-postcss'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import Package from '../package.json'

const resolveFile = path => NodePath.resolve(__dirname, '..', path)

const externalPackages = [
  'classnames',
  'react-dom',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]
export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: true
    },
    {
      file: resolveFile(Package.module),
      format: 'es',
      sourcemap: true
    }
  ],
  external: externalPackages,
  extensions: ['json', 'js', 'ts'],
  plugins: [
    RollPostcss({
      plugins: [require('autoprefixer', 'cssnano')], // cssnano
      extensions: ['.less', '.css'],
      use: ['less']
    }),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom)
      }
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json')
    }),
    RollupCopy({
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist')
        }
      ]
    })
  ]
}
