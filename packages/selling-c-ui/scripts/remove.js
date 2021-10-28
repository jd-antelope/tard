
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

const { execSync } = require('child_process')

function removeComponent(name) {
    const componentPath = path.resolve(__dirname, '../src/components/' + name)
    const stylePath = path.resolve(__dirname, '../src/style/components/')
    const typePath = path.resolve(__dirname, '../types/')
    const docPath = path.resolve(__dirname, '../../selling-c-docs/src/pages/docs')

    try {
        execSync(`rm -rf ${componentPath}`)
        execSync(`rm -rf ${typePath}/${name}.d.ts`)
        execSync(`rm -rf ${stylePath}/${name}.less`)
        execSync(`rm -rf ${docPath}/${name}.tsx`)
        const removeTypes = ['component', 'style', 'type']
        removeTypes.forEach(v => handleComponentRemove(name, v))
    } catch (error) {
      log(`组件${name}删除失败`)
      log(`失败原因:\n ${error}`)
    }
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
