import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import RollupCopy from 'rollup-plugin-copy'
import watch from "rollup-plugin-watch";
import Package from '../package.json'
import RollUpMd from '../scripts/buildmd'

const resolveFile = path => NodePath.resolve(__dirname, '..', path)

const externalPackages = [
  'classnames',
  'react',
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
  watch: resolveFile('src'),
  external: externalPackages,
  extensions: ['json', 'js', 'ts'],
  plugins: [
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollUpMd(),
    RollupCommonjs({
      extensions: ['.esm.js', '.mjs', '.js', '.ts','.md'],
      include: /\/node_modules\//,
      namedExports: {
        'react': ['useState']
      }
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile('tsconfig.rollup.json')
    }),
    RollupCopy({
      verbose: true,
      targets: [
        {
          src: resolveFile('src/style'),
          dest: resolveFile('dist')
        }
      ]
    }),
    watch({
      dir:resolveFile('src/style')
    })
  ]
}
