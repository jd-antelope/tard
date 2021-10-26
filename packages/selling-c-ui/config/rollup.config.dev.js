
import NodePath from 'path'
import baseConfig from './rollup.config.prod.js'
import watch from "rollup-plugin-watch";
const resolveFile = path => NodePath.resolve(__dirname, '..', path)

baseConfig.plugins.push(...[
    watch({
        dir: resolveFile('src/style')
    }),
])
export default baseConfig
