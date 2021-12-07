# 快速开始
## 使用前必备
在你使用之前请确保您已经满足以下条件：
+ 您当前项目必须使用Taro框架进行开发
+ 您已经熟练掌握React相关技能
+ 您已正确安装Node.js版本

## 使用步骤
1. 配置Taro开发环境
 安装 Taro 开发工具 @tarojs/cli
 ```shell
 npm install -g @tarojs/cli
 ```

 检查安装是否正确
 ```shell
 npm info @tarojs/cli
 ```
 如果结果如下图，说明您已经安装成功，如果安装失败，进入Taro官网检查步骤后重新尝试
 ![]('https://img0.baidu.com/it/u=2872891780,2189153294&fm=15&fmt=auto')

2. 项目初始化
使用命令创建模板项目：
```shell
$ taro init myApp
```
3. 安装Tard UI
```shell
$ cd  myApp
$ npm install tard --save
```

4.使用UI组件
```js
// page.js
import { SLButton } from 'tard'
// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'tard/dist/style/index.less' // 全局引入一次即可
```
引入组件的几种方式
1. 全局引入， 我们推荐在全局CSS中引入样式文件： 在 app.less 样式文件中 import 组件样式并按照文档说明使用
```js
@import "`tard/dist/style/index.less";
```
2. 按需引入, 如果您只想使用个别组件，您可以在你的页面中通过以下方式按需引入组件样式
```js
@import "`tard/dist/style/components/button.less";
```

5.使用实例
按需引入
```js
import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlButton } from 'tard'
import "`tard/dist/style/components/button.less";

const Button: FC = () => {
return (
 <View className="container">
   <SlButton>按钮基本使用</SlButton>
 </View>
  );
};
export default memo(Button);
```

如果是全局引入的话，只需要删除页面内的样式文件引入在全局app.less文件中加入以下代码即可
```js
@import "`tard/dist/style/index.less";
```
## 启动项目
 微信小程序编译预览模式
 ```shell
 # npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
 ```
h5移动端编译预览模式
 ```shell
 # npm script
 $ npm run dev:h5
 # 仅限全局安装
 $ taro build --type h5 --watch
 # npx 用户也可以使用
 $ npx taro build --type h5 --watch
 ```