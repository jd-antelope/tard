import { defineConfig } from 'umi';
const  transformPlugin = require('./scripts/transformmd.js')
const path = require('path')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  theme: {
    "primary-color": "#FF2929",
  },
  chainWebpack (config) {
    config.plugin('transformMd').use(new transformPlugin())

  }
})
