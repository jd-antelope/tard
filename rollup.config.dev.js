import NodePath from 'path'
import watch from "rollup-plugin-watch";
import baseConfig from './rollup.config.es.js'
const resolveFile = path => NodePath.resolve(__dirname, '.', path)

baseConfig.plugins.push(...[
  watch({
    dir: resolveFile('packages/ui/src')
  }),
])

export default baseConfig
