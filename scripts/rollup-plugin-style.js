const globby = require('globby')
const path = require("path");
const fs = require('fs-extra');
const nodeWatch = require('node-watch');

const cwd = process.cwd()
const staticLink = 'packages/ui/dist/styles/components'
const reg = /components\/([\s\S]*)\//

// 获取demo所有文件
const getDemoPath = () => {
	const packagePaths = globby.sync(`${cwd}/packages/ui/src/components/*/*.less`)
	return getPathIndex(packagePaths)
}

const getPathIndex = (packagePaths) => {
  const arr = []
  packagePaths.map(file => {
    let isDown = -1
    const fileName = file.match(reg)[1]
    for (let i = 0; i < arr.length; i++) {
      if (fileName === arr[i].name) {
        isDown = i
        break
      }
    }
    if (isDown === -1) {
      arr.push({
        name: fileName,
        packagePaths: [file]
      })
    } else {
      arr[isDown].packagePaths.push(file)
    }
  })
  return arr
}

const writeDemoFile = (res) => {
  const check = fs.existsSync(`${cwd}/${staticLink}/${res.name}`)
  if (!check) fs.mkdirSync(`${cwd}/${staticLink}/${res.name}`)
  res.packagePaths.map(val => {
    const newFile = val.split('components/')[1]
    fs.copyFileSync(
      val, 
      `${cwd}/${staticLink}/${newFile}`
    )
  })
}


function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

const start = () => {
  const list = getDemoPath();
  const check = fs.existsSync(`${cwd}/${staticLink}`)
  if (!check) fs.mkdirsSync(`${cwd}/${staticLink}`)
  list.map(v => writeDemoFile(v))
}

start()

export default function RollupPluginDemo ({ watch }) {
	return {
		name: "rollup-plugin-style", // rollup插件名称，必须符合格式
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