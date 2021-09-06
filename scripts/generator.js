
const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const { isHasSameComponent, createPackageJson, crateIndexTemplate } = require('../src/utils/index.js')

const createComponent = (name) => {
  if (!isHasSameComponent(name)) {
    const componentPath = path.resolve(__dirname, '../src/components/' + name)
    try {
      fs.mkdirSync(componentPath)
      fs.mkdirSync(componentPath + '/lib')
      fs.writeFileSync(componentPath + '/package.json', createPackageJson(name))
      fs.writeFileSync(componentPath + '/lib/index.ts', crateIndexTemplate(name))
      console.log(`组件${name}创建成功`)
    } catch (error) {
      fs.removeSync(componentPath)
      console.log(`组件${name}创建失败`)
      console.log(`失败原因:\n ${error}`)
    }
  }
}

const promptList = [{
  type: 'input',
  message: '请输入组件名称:',
  name: 'componentName',
  default: 'test_user' // 默认值
}, {
  type: 'input',
  message: '请输入版本号:',
  name: 'phone',
  validate: function (val) {
    return true
  }
}]

inquirer.prompt(promptList).then(answers => {
  const { componentName } = answers
  console.log(componentName)
  createComponent(componentName)
})
