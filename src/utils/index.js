const path = require('path')
const fs = require('fs')

/**
 *  获取命令行参数
 * @returns 命令行参数
 */
function getProcessArgs () {
  return process.argv.slice(2)
}

/**
 * 判断组件是否已经被创建
 */
function isHasSameComponent (name) {
  return readdirComponents(name).includes(name)
}
/**
 *
 * @returns 返回组件文件夹目录
 */
function readdirComponents () {
  const componentsPath = path.resolve(__dirname, '../components')
  const components = fs.readdirSync(componentsPath)
  return components.filter(name => fs.existsSync(componentsPath + '/' + name + '/package.json'))
}

/**
 * 创建组件模版文件packages.json
 */
function createPackageJson (name) {
  return `{
        "name": "@selling/${name}",
        "version": "0.1.0",
        "description": "> TODO: description",
        "author": " ",
        "homepage": "",
        "license": "MIT",
        "main": "lib/index.ts",
        "directories": {
          "lib": "lib"
        },
        "files": [
          "lib"
        ],
        "publishConfig": {
          "registry": ""
        },
        "repository": {
          "type": "git",
          "url": ""
        }
      }
`
}

/**
 * 创建组件默认模版
 */
function crateIndexTemplate (name) {
  return `
    import { View } from '@tarojs/components'
    import { FC } from  '@tarojs/taro'
    import Props from '../inferface'
    import * from './index.less
    const ${name}: FC<Props> =() =>{

    return <View>
          ${name}
          </View>
    }`
}

module.exports = {
  getProcessArgs,
  isHasSameComponent,
  createPackageJson,
  crateIndexTemplate,
  readdirComponents
}
