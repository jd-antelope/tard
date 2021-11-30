import { defineConfig } from 'umi';
const  transformPlugin = require('./scripts/createroute.js')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  theme: {
    "primary-color": "#102DF5",
    "primary-color-light": "#F7F8FF",
    "black-color": "#333"
  },
  chainWebpack (config) {
    if (process.env.UMI_ENV !== 'prod') {
      config.plugin('transformMd').use(new transformPlugin())
    }
  }
})
