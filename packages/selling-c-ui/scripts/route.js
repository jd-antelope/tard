const globby = require('globby')
const path = require("path")
const fs = require('fs-extra')
const cwd = process.cwd()

const start = () => {
  const jsonContent = fs.readFileSync(`${cwd}/scripts/router-list.ts`, 'utf-8')
	fs.writeFileSync(`${cwd}/../selling-c-docs/src/business/docs-route.ts`, jsonContent)
  fs.writeFileSync(`${cwd}/../selling-c-demo/src/docs-route.ts`, jsonContent)
}

export default function pluginBuildRoute () {
	return {
		name: "rollup-plugin-route", // rollup插件名称，必须符合格式
		buildStart (source) {
			start();
		},
		load () {

		}
	}
}