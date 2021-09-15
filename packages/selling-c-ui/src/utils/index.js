const fs = require('fs-extra')
const path = require('path')

/**
 * 判断是否存在同名组件
 * @param  name 组件名称
 */
const hasSameComponent = (name) => {
  try {
    fs.readdirSync(path.resolve(__dirname, `../components/${name}`))
  } catch (error) {
    return false
  }
  return true
}
/**
 * 组件名称转换
 * @param name 组件名称
 */
const transformCom = (name) => {
  console.log(44)
  return name.split('-').reduce((pre, v) => (pre += v.slice(0, 1).toLocaleUpperCase() + v.slice(1)), '')
}

/**
 * 追加组件输出至根目录
 * @param name 组件名称
 */
const appendComponent = (name) => {
  fs.appendFileSync(path.resolve(__dirname, '../index.js'), `\nexport { default as ${transformCom(name)} } from './components/${name}'`, 'utf-8', { flag: 'a' })
  fs.appendFileSync(path.resolve(__dirname, '../style/components/index.less'), `\n@import './${name}.less';`, 'utf-8', { flag: 'a' })
}

/**
 * 创建组件文件模版
 * @param name 组件名称
 */
const crateIndexTemplate = (name) => {
  return `
import React, { memo } from 'react'
import { View } from '@tarojs/components'
import { FC } from '@tarojs/taro'
import '../../style/components/${name}.less'
const  ${transformCom(name)}:FC = () => {
return <View className="${name}-wrapper">this is ${transformCom(name)}</View>
}

export default memo(${transformCom(name)})
        `
}

/**
 * 创建样式文件模版
 * @param name 组件名称
 */
const crateStyleTemplate = (name) => {
  return `
.${name}-wrapper{
}
`
}

module.exports = {
  transformCom,
  appendComponent,
  hasSameComponent,
  crateIndexTemplate,
  crateStyleTemplate
}
