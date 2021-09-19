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
* less
* rollup
* lerna

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