const globby = require('globby')
const path = require("path");
const fs = require('fs-extra');
const nodeWatch = require('node-watch');

const cwd = process.cwd()

const getDocsPath =
	() => {
		const packagePaths = globby.sync('../src/components/*/index.tsx', {
			cwd: __dirname
		})

		return packagePaths.map((item) => item.replace('/index.tsx', '').replace('../', ''))
	}

const getFileNmae = (paths) => {
	return paths.split('/')[2]
}

const getMdFile = (path) => {
	const mdPath = `${cwd}/${path}/README.md`
	fs.ensureFileSync(mdPath)
	const mdPathContent = fs.readFileSync(mdPath, 'utf-8')
	return mdPathContent.replace(/`/g, '~')
}

const writeMarkdown = (mdContent, v) => {
	const jsonContent = fs.readFileSync(`${cwd}/scripts/template.txt`, 'utf-8')
	const jsonResult = jsonContent.replace(`{{this}}`, mdContent)
	fs.writeFileSync(`${cwd}/../selling-c-docs/src/pages/docs/comps/${v}.tsx`, jsonResult)
	console.log(`${v}解析完成`)
}

const start = () => {
	const docs = getDocsPath();
	docs.map(v => {
		writeMarkdown(getMdFile(v), getFileNmae(v))
	})
}

export default function pluginBuildMd ({watch}) {
	return {
		name: "rollup-plugin-md", // rollup插件名称，必须符合格式
		buildStart (source) {
			console.log(watch)
			if(watch){
				nodeWatch(path.join(__dirname, '../src/components'), { recursive: true }, function (evt, name) {
					name.includes('.md') && start();
				});
			}
			start();
		},
		load () {

		}
	}
}