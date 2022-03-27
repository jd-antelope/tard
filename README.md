# 组件库

## 开发
由于taro和vite不能兼容，开发阶段需要走两个服务，一个打包，一个taro 的运行环境

```shell
pnpm run taro-dev
pnpm run dev:watch
```

开发的时候需要link一下ui库

待后期维护。。。
## 本项目为零售云c端组件库
任务分配

## packages @霍
### comps @月
#### components
##### index.tsx
##### md
##### demo
##### types
##### comp.tsx
#### index.ts
#### index.less
#### var.less
### demo @霍
### tools(hooks/fn) @霍
#### hooks
#### fn
## 自研发包 @月
## tsconfig @霍
## docs @月

## 备注
1. types 写到组件内，利用脚本打包
2. 组件库用hooks
3. style用less
4. 组件文档和demo写在组件里面
5. 组件静态文字提出


# 20220222
demo vite(css\ts) @huo
docs(md) core @yue


1、组件库是否还用统一前缀
2、types是否还需要，是直接写到tsx里面，还是单独提出
3、打包是否只发布一个包
4、demo最终适配方案
5、一套命令是否支持

## 2022-03-02
1、demo @霍
2、configProvider @郑
3、docs、md @郑
4、types @霍

## 2022-03-03
1. 是否需要.d.ts文件(可以通过脚本自动生成)
2. demo目前需要运行2个环境
3. demo里面内容怎么定义
4. 配置组件如何避免全局参数
   
## 2022-03-07
1. 组件库分工（10个）：
   button cell icon price toast form field dropdownMenu modal overlay ConfigProvider(全局)


## 2022-02-22
1. 组件库剩余 cell uploader tab canvas footerbutton datatimepicker progress
2. demo和docs联通
3. 文档使用需求改一下
4. 代码review

dist                        编译结果目录
├── styles                      项目编译配置目录
|   ├── components                默认配置
|   |   ├── button   
|   |   |   ├── button.less
|   |   |   └── var.less
|   |   └── ......
|   ├── mixins                 开发环境配置(dev)
|   |   ├── index.less
|   |   └── libs
|   |   |   ├── line.less
|   |   |   └── ......
|   ├── index.less
|   ├── variable.less 
|   └── prod.js                 生产环境配置(build)
|
├── react.es.js                         源码目录
├── react.umd.js  