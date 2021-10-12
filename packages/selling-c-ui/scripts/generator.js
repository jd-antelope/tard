
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')
const { 
  hasSameComponent, crateIndexTemplate, crateStyleTemplate, appendComponent, crateTypeTemplate
} = require('../src/utils/index.js')
// eslint-disable-next-line no-console
const log = console.log

const createComponent = (name, style) => {
  if (!hasSameComponent(name)) {
    const componentPath = path.resolve(__dirname, '../src/components/' + name)
    const stylePath = path.resolve(__dirname, '../src/style/components/')
    const typePath = path.resolve(__dirname, '../types/')
    // try {
      fs.mkdirSync(componentPath)
      fs.writeFileSync(componentPath + '/index.tsx', crateIndexTemplate(name))
      fs.writeFileSync(typePath + `/${name}.d.ts`, crateTypeTemplate(name))
      if (style) {
        fs.writeFileSync(stylePath + `/${name}.less`, crateStyleTemplate(name))
      } 
      appendComponent(name)
      log(`组件${name}创建成功`)
    // } catch (error) {
    //   fs.removeSync(componentPath)
    //   log(`组件${name}创建失败`)
    //   log(`失败原因:\n ${error}`)
    // }
  }
}
/**
 * 初始化
 */
const init = () => {
  log(
    chalk.green(
      figlet.textSync('SELLING-C', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  )
}

const promptList = [{
  type: 'input',
  message: '请输入组件名称(默认添加sl-前缀):',
  name: 'componentName',
  require: true,
  validate: function (val) {
    return hasSameComponent(val) ? log('同名组件已经存在,请重新指定') : true
  },
  filter: function (val) {
    return `sl-${val}`
  }

}, {
  type: 'input',
  message: '是否需要为你生成样式文件(y/n):',
  default: 'index.less', // 默认值
  name: 'needstyle',
  validate: function (val) {
    if (['y', 'n'].includes(val.toLocaleLowerCase())) {
      return true
    } else {
      log(chalk.red('请输入y(是) or n(否)'))
      return false
    }
  },
  filter: function (val) {
    return val
  }

}]

init()
inquirer.prompt(promptList).then(answers => {
  const { componentName, needstyle } = answers
  createComponent(componentName, needstyle)
})
