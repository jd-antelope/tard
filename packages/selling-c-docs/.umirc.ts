import { defineConfig } from 'umi';
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
    config.module
      .rule('markdown')
        .test(/\.md$/)
        .oneOf('babel')
          .use(`babel-md`)
            .loader('babel-loader')
            .options({ customize: require.resolve(
              '@umijs/babel-preset-umi'
            ) })
            .options({ presets: ['@babel/preset-react'] })
          .end()
        .oneOf('md')
          .before('babel')
          .use(`babel-md`)
            .loader(path.join(__dirname, './scripts/addImportLoader.js'))
  }
})
// @umijs/preset-react
// {
//   test: /\.md$/,
//   use: [
//     {
//       loader: 'babel-loader',
//       options: {
//         rootMode: 'upward'
//       }
//     },
//     `${path.join(__dirname, './addImportLoader.js')}`
//   ]
// },
