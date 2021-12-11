const globby = require('globby')
const path = require("path");
const fs = require('fs-extra');
const watch = require('node-watch');

const cwd = process.cwd()

const getDocsPath = () => {
  const packagePaths = globby.sync('../markdown/*', {
    cwd: __dirname
  })

  return packagePaths.map((item) => item.replace('../', ''))
}

const getFileNmae = (paths) => {
  return paths.replace(/(.*\/)*([^.]+).*/ig, '$2');
}

const getMdFile = (path) => {
	const mdPath = `${cwd}/${path}`
	fs.ensureFileSync(mdPath)
	const mdPathContent = fs.readFileSync(mdPath, 'utf-8')
	return mdPathContent.replace(/`/g, '~')
}

const writeMarkdown = (mdContent, v) => {
	const jsonContent = fs.readFileSync(`${cwd}/scripts/template.txt`, 'utf-8')
	const jsonResult = jsonContent.replace(`{{this}}`, mdContent)
	fs.writeFileSync(`${cwd}/../tard-docs/src/pages/docs/${v}.tsx`, jsonResult)
}

const start = () => {
	const docs = getDocsPath();
	docs.map(v => {
		writeMarkdown(getMdFile(v), getFileNmae(v))
	})
}

class CreateMdPlugin {
  constructor () {
    start();
    watch(path.join(__dirname, '../markdown'), { recursive: true }, function (_, name) {
      name.includes('.md') && start();
    });
    start();
  }
  apply (compiler) { // 其中compiler为webpack实例，下面我们详细讲

  }
}
module.exports = CreateMdPlugin