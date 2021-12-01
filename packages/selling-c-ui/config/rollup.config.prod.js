import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupTypescript from 'rollup-plugin-typescript2'
import {uglify as RollupUglify} from "rollup-plugin-uglify";
import RollupCopy from 'rollup-plugin-copy'
import Package from '../package.json'
import RollUpMd from '../scripts/buildmd'
import RollupRoute from '../scripts/route'

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
  external: externalPackages,
  extensions: ['json', 'js', 'ts'],
  plugins: [
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    RollupRoute(),
    RollUpMd({ watch: process.env.NODE_ENV  === 'development'}),
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

  ]
}
