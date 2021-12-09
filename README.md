# 如何使用搭建一个属于自己的组件库

## 为什么要自己搭建组件库
  随着业务种类的丰富以及组件种类的增多，在不同项目里面维护功能类似或者完全相同的组件已经变得十分困难，为了让设计更高效、开发更迅速、产品体验更一致。开发一套属于自己的组件库就变得十分有必要了，让我们一起开始吧！！！
## 环境准备
* React 我们采用的开发框架是react 所以需要我们安装React依赖 react react-dom，
    ``` javascript
  yarn add react react-dom --peer 
    ```
* Taro 因为我们的组件库是基于Taro开发的所以我们需要安装taro 的相关依赖 @tarojs/components、@tarojs/react、@tarojs/taro
    ``` javascript
  yarn add @tarojs/components @tarojs/react @tarojs/taro --peer
    ```
* rollup 打包工具我们采用的是rollup所以需要我们安装对应的依赖
   ``` javascript
  yarn add  rollup  rollup-plugin-copy  rollup-plugin-less  rollup-plugin-postcss  rollup-plugin-typescript2  rollup-plugin-visualizer --dev
  ```
* lerna lerna是一款包管理工具用来对我们项目下得npm包做统一管理，也需要我们进行安装，这个是整体项目下的依赖所以需要我们在根目录进行安装

   ``` javascript
  yarn add lerna --dev
  ```

## 初始化项目 

1. 初始化npm和lerna  执行lerna init 执行完成之后虎仔我们的目录下生成lerna.json配置文件，和packeage.json 的两个配置文件内容一般是这样  
  ``` javascript
 {
      "packages": [
        "packages/*"      //指定lerna要管理的npm包的文件路径
      ],
      "version": "1.2.14",  // 当前版本号
      "npmClient": "yarn",  //指定安装用的npm client
      "useWorkspaces": true //是否开启workspace
}
  ```
2. 配置命令
```javascript
  "scripts": {
    "bootstrap": "lerna bootstrap",                            //为所有的子包自动安装package.json依赖
    "build": "lerna run build",                                //编译命令为我们编译每npm包下的的buil的命令   
    "build:component": "lerna run --scope selling-c-ui build", //作用跟上一个命令类似 --scope 允许我们只执行指定包下命令
    "clean": "lerna run clean",的                              //执行删除命令 删除各个包下的node_modules
    "clean:component": "lerna run --scope selling-c-ui clean", //区别同上
    "version": "lerna version",                                //检查需要发布的包，并且提示用户指定版本号
    "publish": "lerna publish from-package "                   //发布npm包
  },
```


## lerna相关

* lerna bootstrap  为每个子包安装node_modules依赖
* lerna create     创建新的子包
* lerna version    这个命令 识别出修改的包 --> 创建新的版本号 --> 修改package.json --> 提交修改 打上版本的tag --> 推送到git上。
* lerna publish    发布包 

## package.json
  * 子包中的packages.json:

  ```javascript
  {
  "name": "@jd/package-A", // 包名， 上传至npm后的包名
  "version": "1.4.6", 
  "module": "dist/index.esm.js",//定义一个针对 es6 模块及语法的入口文件 构建工具在构建项目的时候，如果发现了这个字段，会首先使用这个字段指向的文件，如果未定义，则回退到 main 字段指向的文件。
  "main": "dist/index.js", //项目的入口文件
  "source": "src/index.ts", //用来指定项目的源文件入口
  "scripts": {
  },
  "publishConfig": {
    "registry": "http://registry.m.jd.com", //npm仓库地址
    "access": "public", // 如果是私有包即（scope开头的包）这项必须为public
  },
  "files": [ //指定发布npm包时需要上传的文件目录， 也可在.npmignore文件中指定
    "lib",
    "dist",
    "types"
  ],
  "typeRoots": [ //
    "node_modules/@types",
    "types"
  ],
  "devDependencies": {
  },
  "peerDependencies": {
  },
  "author": "",
  "license": "MIT"
} 
// module main browser。
如果 npm 包导出的是 ESM 规范的包，使用 module
如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser。
如果 npm 包只在 server 端使用，使用 main
如果 npm 包在 web 端和 server 端都允许使用，使用 browser 和 main
其他更加复杂的情况，如npm 包需要提供 commonJS 与 ESM 等多个规范的多个代码文件，请参考上述使用场景或流程图
参考：https://www.cnblogs.com/qianxiaox/p/14041717.html
  ```
# 遇到的问题？
1. 什么是peerDependencies？以及它的作用是什么？
dependencies与peerDependencies区别-假设我们当前的项目是MyProject，假设我们的包名叫做packageA，而且我们在A的dependencies安装了packageB的话我们在使用自己的项目中执行yarn add packageA 的时候你会发现你的安装目录下得目录结构是这样的
```javascript
MyProject
|- node_modules          
      |- PackageA
       |- node_modules
         |- PackageB
```
但是我们在项目里面直接引用packageB就会失败var packageB = require('PackageB')，因为node在查找包依赖关系的时候会向上查找不会进入到你的包内部的node_module里面查找，这个时候你的项目就会报错，为了解决这个问题我们其实就可以采用peerDependencies
```javascript
MyProject
|- node_modules
   |- PackageA
   |- PackageB
```
这样的话你的项目运行起来就不会报错了，还有另外一个原因是因为我们在打包npm包的时候一些项目依赖不需要被打入最终的输出文件里面，但是我们的包的运行又需要具有这个依赖包的环境，peerDependencies其实就是告诉正在使用这个包的开发者，你如果想用我这个包，那我建议你也安装peerDependencies 中的几个包，不然可能会有问题
ps:npm2 与npm3对peerDependencies字段的处理差异：
*  npm2中，即使当前项目MyProject中没有直接依赖PackageB，该PackageB包依然会安装到当前项目的node_modules文件夹中。
*  npm3中不会再要求peerDependencies所指定的依赖包被强制安装，相反npm3会在安装结束后检查本次安装是否正确，如果不正确会给用户打印警告提示。你需要手动的在MyProject项目的package.json文件指定PackageB的依赖。

2. 在项目里面我们为什么要使用rollup + ts 来构建我们的项目

3. 

## appid: wx3044a91b8feca20b

## 统一修改
1. 文档代码格式统一排版、 属性关键字高亮
2. API统一大写
3. 事件抽取到Evnent
4. 使用指南统一换成代码演示
5. 全局组件引入下面文字统一删除去掉
6. 针对只支持小程序的组件需要在demo中放置小程序二维码引导用户去小程序中查看效果
7. 函数类型统一改成function
8. docs里面需要给form增加底部没margin，以及多行时的行高
9. 类型值统一改成小写
10. event列表属性需要统一改成事件名 说明 回调参数 
11. 样式描述需要删除



### button
1. 引入字体需改   已经修复
### cell 
1. 属性列表修改
2. icon属性统一，类型指定到icon图标
### image
1. 增加预览
2. 属性部分需要参考taroUI修改
3. transtion 需增加默认值
4. 商羚图片删除
5. 过度效果是都需要添加展示动作
6. 失败背景图可替换

### toast
1. demo 修改

### datePicker
1. outClose 属性需要改成closeOnclickOverlay
2. title endTitle 属性默认值修改
### Field
1. labelAlign 改成titleAligin
2. 对齐方式属性需要补齐
3. 时间统一改成function

### Form
1. 没有介绍
2. demo格式不规范

### input-number
1. 时间类型错误需要手动修改

### rate
1. onchange 返回值修改成value   已经修复

### searchBar 重写

### switch
1. 标题不对
2. 组件宽度太长
3. 增加动画效果
4. 文档补充
5. 自定义标题部分错误


### uploader 待补充
### loading
1. 大小去除750px 部分
2. 展示遮罩不生效
3. 属性部分缺少overlay
4. type属性、类型默认值不对
5. size 缺少默认值
6. isMask属性不明确不知道是干啥的
7. 缺少events 和样式变量部分

###  popup                                          已经修复
1. demo和文档不规范需要修改
2. outClose 属性需要改成closeOnclickOverlay
3. align 需要修改为titleAlign
4. isOpend需要修改 overlay
### sort
1. 缺少事件以及样式部分
2. 格式统一下
3. 使用方式可能需要修改

### badge
1. 缩进统一改成2个

### Empty 
1. 重新修改
### slProgress                                     已经修复
1. 使用缺少描述信息

### 骨架屏
1. 介绍没写
2. 引入位置不对
3. demo可以优化一下增加一个图文混排的效果

### tagprice
1. 标题错误
2. 引入部分位置不对
3. title 默认值应该为空
4. color 默认色应该是主题色，写死是否合适

###  grid
1. 内容排版横向改成 横向
2. demo内容改成图片
3. clickable 描述错误
4. border 描述错误
5. direction 描述错误

### navbar
1. 字体统一换成小写px
2. 小程序自定义头部demo

### tab 和tabpanel合并

### canvas 自己完善
1. width height 需要默认值
2. isopend 搞成overlay


### footerbutton
1. demo 不高亮，未对齐
2. replaceContent 改成Content