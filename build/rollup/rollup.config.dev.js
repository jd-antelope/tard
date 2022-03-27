import path from 'path'
import watch from "rollup-plugin-watch";
import baseConfig from './rollup.config.base.js'
const cwd = process.cwd()

const resolveFile = filePath => path.join(cwd, filePath)

baseConfig.plugins.push(...[
  watch({
    dir: resolveFile('packages/ui/src')
  }),
])

export default baseConfig
