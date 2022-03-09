const globby = require('globby')
const path = require("path");
const fs = require('fs-extra');
const nodeWatch = require('node-watch');

const cwd = process.cwd()
const staticLink = 'packages/taro-demo/src/pages'
const reg = /components\/([\s\S]*)\//

// 获取demo所有文件
const getDemoPath = () => {
	const packagePaths = globby.sync(`${cwd}/packages/ui/src/components/*/demo/*.tsx`)
	return packagePaths.map((item) => item.replace('/index.tsx', ''))
}

const writeDemoFile = (file) => {
  const fileName = file.match(reg)[1]
	const check = fs.existsSync(`${cwd}/${staticLink}/${fileName}`)
	if (!check) {
		fs.mkdirSync(`${cwd}/${staticLink}/${fileName}`)
	}
	writeDemoJson(file)
	const packagePaths = globby.sync(file, {
		cwd: __dirname
	})
	packagePaths.map(v => {
		const oldFile = v.replace('../../', '/')
		const newFile = oldFile.split('demo/')[1]
	  fs.copyFileSync(
			oldFile, 
			`${cwd}/${staticLink}/${fileName}/${newFile}`
		)
	})
}

const writeDemoJson = (file) => {
	const fileName = file.match(reg)[1]
  const json = `
	export default {
		navigationBarTitleText: '${fileName}',
		enableShareAppMessage: true
	}
	`
	fs.writeFileSync(`${cwd}/${staticLink}/${fileName}/index.config.ts`, json)
}

const writeDemoConfig = (arr) => {
	const mdPathContent = fs.readFileSync(`${cwd}/packages/taro-demo/src/app.config.ts`, 'utf-8')
	let str = `'pages/home/index'`
  arr.map(v => {
		const fileName = v.match(reg)[1]
    str += `,'pages/${fileName}/index'`
	})
	const jsonArr = mdPathContent.split('pages: [')
	const jsonArrEnd = jsonArr[1].split('],')
	const json = `${jsonArr[0]}pages: [${str}],${jsonArrEnd[1]}`
	fs.writeFileSync(`${cwd}/packages/taro-demo/src/app.config.ts`, json)
}

const start = () => {
  const list = getDemoPath();
	writeDemoConfig(list)
  list.map(v => {
		writeDemoFile(v)
  })
}

start()

export default function RollupPluginDemo ({ watch }) {
	return {
		name: "rollup-plugin-demo", // rollup插件名称，必须符合格式
		buildStart (source) {
			if (watch) {
				nodeWatch(path.join(__dirname, 'packages/ui/src/components'), { recursive: true }, function (evt, name) {
					name.includes('/demo/') && start();
				});
			}
			start();
		},
		load () {}
	}
}