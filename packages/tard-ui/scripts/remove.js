
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')
const {
  hasSameComponent, handleComponentRemove
} = require('../src/utils/index.js')
// eslint-disable-next-line no-console
const log = console.log

function removeComponent(name) {
  const componentPath = path.resolve(__dirname, '../src/components/' + name)
  const stylePath = path.resolve(__dirname, '../src/style/components/')
  const typePath = path.resolve(__dirname, '../types/')
  const docPath = path.resolve(__dirname, '../../tard-docs/src/pages/docs')

  // 删除创建的模块文件
  rmFileOrDir([
    { type: 'dir', path: componentPath},
    { type: 'file', path: `${typePath}/${name}.d.ts`},
    { type: 'file', path: `${stylePath}/${name}.less`},
    { type: 'file', path: `${docPath}/${name}.tsx`}
  ])
  // 删除依赖模块文件的内容
  const removeTypes = ['component', 'style', 'type']
  removeTypes.forEach(v => handleComponentRemove(name, v))
}

function rmFileOrDir(params) {
  params.forEach(v => {
    try {
      const method = v.type === 'dir' ? 'rmdirSync' : 'unlinkSync'
      fs[method](v.path, {
        recursive: true
      })
    } catch (error) {
      log(`删除${v.path}失败`)
      log(`失败原因:\n ${error}`)
    }
  })
}


const promptList = [{
  type: 'input',
  message: '请输入要删除对组件名称(默认添加sl前缀):',
  name: 'componentName',
  require: true,
  validate: function (val) {
    return !hasSameComponent(val) ? log(`暂未添加sl-${val}组件，请重新输入`) : true
  },
  filter: function (val) {
    return `${val}`
  }
}]

inquirer.prompt(promptList).then(answers => {
  const { componentName } = answers
  removeComponent(componentName)
})
