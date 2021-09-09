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
  mode: 'production',
  entry: createEntries(),
  output: {
    path: path.resolve(__dirname, './packages'),
    filename: '[name]/lib/index.js',
    library: '[name]',
    libraryTarget: 'commonjs-module'
    // libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }, 'ts-loader'],
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
        // use: [
        //   {
        //     loader: 'style-loader'
        //   },

        //   {
        //     loader: 'css-loader'

        //   },
        //   {
        //     loader: 'less-loader'
        //   }

        // ]
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
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
    '@tarojs/taro': '@tarojs/taro',
    '@tarojs/components': '@tarojs/components'
  }

}
