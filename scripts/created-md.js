const globby = require('globby')
const path = require("path");
const fs = require('fs-extra');
const cwd = process.cwd()

const getDocsPath = () => {
  const packagePaths = globby.sync('../packages/tard-ui/src/components', {
    cwd: __dirname,
    expandDirectories: {
			files: ['*/*.md'],
		},
    deep: 2,
  })
  return packagePaths.map((item) => item.replace('../', ''))
}

const getFileNmae = (paths) => {
  return path.basename(paths).split('.')[0]
}

const getMdFile = (path) => {
  const mdPathContent = fs.readFileSync(`${cwd}/${path}`, 'utf-8')
  return mdPathContent.replace(/`/g, '~')
}

const writeMarkdown = (mdContent, v) => {
  const jsonContent = fs.readFileSync(`${cwd}/scripts/template.txt`, 'utf-8')
  const jsonResult = jsonContent.replace(`{{this}}`, mdContent)
  fs.writeFileSync(`${cwd}/packages/tard-docs/src/pages/docs/${v}.tsx`, jsonResult)
  console.log(`${v}解析完成`)
}

const changeDocRoute = (docs) => {
  const list = []
  docs.map(v => {
    list.push({
      title: getFileNmae(v),
      path: `/docs/${getFileNmae(v)}`
    })
  })
  const jsonContent = fs.readFileSync(`${cwd}/scripts/doc-route-template.txt`, 'utf-8')
  const jsonResult = jsonContent.replace(`{{this}}`, JSON.stringify(list))
  fs.writeFileSync(`${cwd}/packages/tard-docs/src/business/docs-route.ts`, jsonResult)
  console.log('列表加载完成')
}

const start = () => {
  const docs = getDocsPath()
  docs.map(v => {
    writeMarkdown(getMdFile(v), getFileNmae(v))
  })
  changeDocRoute(docs)
}

module.exports = start

start()