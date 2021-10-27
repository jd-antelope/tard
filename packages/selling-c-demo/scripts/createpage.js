const fs = require('fs-extra')
const path = require('path')
const globby = require('globby')
const handlebars = require("handlebars");

/**
 * 读取组件模板信息
 */
function readIndexTempl (cName) {
  const content = fs.readFileSync(path.resolve(__dirname, './template/indextmpl.txt'), 'utf-8');
 return handlebars.compile(content)({
    componentName: transfromCName(cName)
  });
}

/**
 * 读取配置文件模板信息
 */
 function readConfigTempl (cName) {
  const content = fs.readFileSync(path.resolve(__dirname, './template/configtmpl.txt'), 'utf-8');
 return handlebars.compile(content)({
    componentName: transfromCName(cName)
  });
}
/**
 * 写模板
 */
 function createCompenent (cName) {
   const filePath = path.resolve(__dirname,`../src/pages/${cName}/index.tsx`);
   const configPath = path.resolve(__dirname,`../src/pages/${cName}/index.config.ts`);
   const stylePath = path.resolve(__dirname,`../src/pages/${cName}/index.less`);
  fs.ensureFileSync(filePath)
  fs.writeFileSync(filePath,readIndexTempl(cName))
  fs.writeFileSync(configPath,readConfigTempl(cName))
  fs.writeFileSync(stylePath,'')
}
/**
 * 组件名转换
 * @param {*} cName 
 * 
 */
function transfromCName(cName){
  return cName.split('-').reduce((pre, v) => pre + v.slice(0,1).toLocaleUpperCase() + v.slice(1),'')
}


/**
 * 读取组件项目中的组件列表
 */
function getComponentList () {
  const packagePaths =globby.sync('../../selling-c-ui/src/components', {
    cwd: __dirname,
    expandDirectories: {
      files: ['*.tsx'],
    },
    deep: 2,
  }).map(v => createCompenent(v.split('/')[v.split('/').length-2]))
}
getComponentList()




