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
  return `Sl${name.split('-').reduce((pre, v) => (pre += v.slice(0, 1).toLocaleUpperCase() + v.slice(1)), '')}`
}

const transformFront = (name) => {
  return name.split('-')[1]
}

/**
 * 追加组件输出至根目录
 * @param name 组件名称
 */
const appendComponent = (name) => {
  fs.appendFileSync(path.resolve(__dirname, '../index.ts'),
   `\nexport { default as ${transformCom(name)} } from './components/${name}'`, 'utf-8', { flag: 'a' })
  fs.appendFileSync(path.resolve(__dirname, '../style/components/index.less'),
   `\n@import './${name}.less';`, 'utf-8', { flag: 'a' })
  fs.appendFileSync(path.resolve(__dirname, '../../types/index.d.ts'),
   `\nexport { default as ${transformCom(name)} } from './${name}'`, 'utf-8', { flag: 'a' })
}

/**
 * 创建组件文件模版
 * @param name 组件名称
 */
const crateIndexTemplate = (name) => {
  return `
import React from 'react'
import { View } from '@tarojs/components'
import { ${transformCom(name)}Props, ${transformCom(name)}State } from '../../../types/${name}'

export default class ${transformCom(name)} extends React.Component<${transformCom(name)}Props, ${transformCom(name)}State> {
  public static defaultProps: ${transformCom(name)}Props

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    return (
      <View></View>
    )
  }
}

${transformCom(name)}.defaultProps = {
}
`
}

/**
 * 创建样式文件模版
 * @param name 组件名称
 */
const crateStyleTemplate = (name) => {
  return `
@import '../variables/index.less';
@import '../mixins/index.less';

.@{--css-prefix}-${transformFront(name)} {
  overflow: hidden
}
`
}

/**
 * 创建类型文件模版
 * @param name 组件名称
 */
const crateTypeTemplate = (name) => {
  return `
import SlComponent from './base'

export interface ${transformCom(name)}Props extends SlComponent {
}

export interface ${transformCom(name)}State {
}
declare const ${transformCom(name)}: ComponentClass<${transformCom(name)}Props>
`
}

module.exports = {
  transformCom,
  appendComponent,
  hasSameComponent,
  crateIndexTemplate,
  crateStyleTemplate,
  crateTypeTemplate
}
