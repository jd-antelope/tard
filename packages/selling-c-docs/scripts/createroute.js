const globby = require('globby')
const path = require("path");
const fs = require('fs-extra');
const cwd = process.cwd()
const watch = require('node-watch');

const getDocsPath = () => {
  const packagePaths = globby.sync('../src/pages/docs', {
    cwd: __dirname,
    expandDirectories: {
			files: ['*.tsx'],
		},
    deep: 1,
  })

  return packagePaths.map((item) => item.replace('../', '')).filter(item => !item.includes('/index'))
}

const getFileNmae = (paths) => {
  return path.basename(paths).split('.')[0]
}
const changeDocRoute = (docs) => {
  const list = []
  docs.map(v => {
    
    list.push({
      title: getFileNmae(v),
      path: `/docs/${getFileNmae(v)}`
    })
  })
  const jsonContent = fs.readFileSync(`./scripts/doc-route-template.txt`, 'utf-8')
  const jsonResult = jsonContent.replace(`{{this}}`, JSON.stringify(list))
  fs.writeFileSync(path.resolve(__dirname,'../src/business/docs-route.ts'), jsonResult)
  console.log('列表加载完成')
}

const start = () => {
  const docs = getDocsPath();
  changeDocRoute(docs)
}



class CreateRoutePlugin {
    constructor () {
      start();
        watch(path.join(__dirname, '../src/pages/docs'), { recursive: true }, function (evt, name) {
         start();
        });
        start();

    }
    apply (compiler) { // 其中compiler为webpack实例，下面我们详细讲

    }
}
module.exports = CreateRoutePlugin