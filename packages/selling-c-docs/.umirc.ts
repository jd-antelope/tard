import { defineConfig } from 'umi';
const  transformPlugin = require('./scripts/createroute.js')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  theme: {
    "primary-color": "#FF2929",
  },
  chainWebpack (config) {
    if (process.env.UMI_ENV !== 'prod') {
      config.plugin('transformMd').use(new transformPlugin())
    }
  }
})
