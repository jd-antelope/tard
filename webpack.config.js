const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { readdirComponents } = require('./src/utils/index.js')

function createEntries () {
  return readdirComponents().reduce((acc, curr) => {
    acc[curr] = path.resolve(__dirname, './src/components/' + curr + '/lib/index.tsx')
    return acc
  }, {})
}
module.exports = {
  mode: 'development',
  entry: createEntries(),
  output: {
    path: path.resolve(__dirname, './packages'),
    filename: '[name]/lib/index.js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'less-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200
            }
          }
        ]
      }

    ]
  },
  plugins: [
    // 清空输出目录
    new CleanWebpackPlugin()
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  externals: {
    react: 'React',
    '@tarojs/components': 'components',
    '@tarojs/taro': 'Taro'
  }

}
