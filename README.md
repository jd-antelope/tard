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

1. 初始化npm和lerna  执行npm init -y 以及lerna init 执行完成之后虎仔我们的目录下生成lerna.json配置文件，和packeage.json 的两个配置文件内容一般是这样  
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

* files 指定上传npm时需要发布的文件夹目录 也可以在发包的根路径下新建 .npmignore文件进行指定



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