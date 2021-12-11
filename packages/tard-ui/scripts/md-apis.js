const globby = require('globby')
const path = require('path');
const fs = require('fs-extra');

const cwd = process.cwd()

const getTypesPath = () => {
  const packagePaths = globby.sync('../types/*.ts', {
    cwd: __dirname
  })

  return packagePaths.filter(item => !item.includes('index') && !item.includes('base')).map((item) => item.replace('../', ''))
}

const readTypes = (v) => {
  const list = []
  const str = fs.readFileSync(`${cwd}/${v}`, 'utf-8')
  const attrStr = str.split('SlComponent {')[1].split('}')[0]
  const attrArray = attrStr.split('/').filter(v => !v.includes('*')).map(v => {
    return v.replace(/ /g, '').split('\n').join('')
  }).filter(v => v !== '')
  const resArray = attrStr.split('/').filter(v => v.includes('*')).map(v => {
    return v.replace(/ /g, '').replace(/\*/g, '').split('\n').join('')
  }).filter(v => v !== '')
  attrArray.map((v, i) => {
    list.push({
      attr: v.split(':')[0].replace('?', ''),
      type: v.split(':')[1],
      des: String(resArray[i]).split('@default')[0],
      default: String(resArray[i]).split('@default')[1] || '-'
    })
  })
  return list
}

const readMdFile = (path, list) => {
  
  const p = path.split('/')[1].split('.')[0].replace('sl-', '')
  let str = `## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
`
  const jsonContent = fs.readFileSync(`${cwd}/src/components/${p}/README.md`, 'utf-8')
  list.map(v => {
    str += `| ${v.attr} | ${v.des} | ${v.type} | ${v.default} |
`
  })
  if (!jsonContent.includes('## api')) {
    fs.writeFileSync(`${cwd}/src/components/${p}/README.md`, jsonContent.split('## api')[0] + str)
  }
}

function start () {
  const types = getTypesPath();
	types.map(v => {
		const list = readTypes(v)
    readMdFile(v, list)
	})
}

start()