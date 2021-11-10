const path = require('path')
const fs = require('fs-extra')
const globby = require('globby')
const handlebars = require("handlebars");

/**
 * 读取模板信息
 */
function readTempl (cName, path) {
  const content = fs.readFileSync(path, 'utf-8');
  return handlebars.compile(content)({
    componentName: transfromCName(cName)
  });
}

/**
 * 写模板
 */
function createCompenent (cName) {
  const filePath = path.resolve(__dirname, `../src/pages/${cName}/index.tsx`);
  const configPath = path.resolve(__dirname, `../src/pages/${cName}/index.config.ts`);
  const stylePath = path.resolve(__dirname, `../src/pages/${cName}/index.less`);
  if (!fs.pathExistsSync(filePath)) {
    fs.ensureFileSync(filePath)
    fs.writeFileSync(filePath, readTempl(cName, path.resolve(__dirname, './template/indextmpl.txt')));
    fs.writeFileSync(configPath, readTempl(cName, path.resolve(__dirname, './template/configtmpl.txt')));
    fs.writeFileSync(stylePath, '')
  }
}
/**
 * 组件名转换
 * @param {*} cName 
 * 
 */
function transfromCName (cName) {
  return cName.split('-').reduce((pre, v) => pre + v.slice(0, 1).toLocaleUpperCase() + v.slice(1), '')
}

/**
 * 路由置换
 */
function resetRouter (list) {
  let str = '['
  list.map(res => {
    let dirName = res.split('/')[res.split('/').length - 2];
    str += `{"title":"${dirName}","path":"/docs/${dirName}"},`
  })
  str += ']'
  const content = fs.readFileSync(path.resolve(__dirname, './template/routerTmpl.txt'), 'utf-8')
  const routerContent = content.replace('{{this}}', str);
  fs.writeFileSync(path.resolve(__dirname, `../src/docs-route.ts`), routerContent);
}

/**
 * 读取组件项目中的组件列表
 */
function getComponentList () {
  let cNames = ['home'];
  const content = fs.readFileSync(path.resolve(__dirname, `../src/app.config.ts`), 'utf-8');
  const reg = /((?:\n|.)*\[)((?:\n|.)*)(\](?:\n|.)*)/gm
  const packagePaths = globby.sync('../../selling-c-ui/src/components', {
    cwd: __dirname,
    expandDirectories: {
      files: ['*.tsx'],
    },
    deep: 2,
  }).map(v => {
    let dirName = v.split('/')[v.split('/').length - 2];
    cNames.push(dirName)
    createCompenent(dirName);
    return v
  })
  let configObj = content.replace(reg, ($1, $2, $3, $4) => {
    return $2 + cNames.reduce((pre, v) => pre + `\n\t\t'pages/${v}/index',`, '') + `\n${$4}`
  });
  fs.writeFileSync(path.resolve(__dirname, `../src/app.config.ts`), configObj);
  resetRouter(packagePaths)
}

getComponentList()

