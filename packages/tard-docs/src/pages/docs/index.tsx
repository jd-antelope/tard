import MarkDown from '@/components/markdown'

const markdown = `# Tard
一套基于 **Taro** 框架开发的多端 **React UI** 组件库

![Alt](http://storage.360buyimg.com/hawley-common/tard-image/Tard-logo.png)
> Tard 取名自 ~Taro React Design~ 简写，发音特的

## 介绍
Tard是**京东商羚前端团队**开源移动端多端组件库, 开发和服务于移动Web界面的企业级产品

## 版本提示
目前版本处理预发布状态，适用于taro的~React~版本，taro的版本要在3.X以上版本
## 特性
+ 🏠 基于 ~Taro~ 开发 ~UI~ 组件
+ 💎 30+ 个高质量组件，覆盖移动端主流场景
+ 💪 使用 TypeScript 编写，提供完整的类型定义
+ 📖 提供完善的中文文档和组件示例
+ 📦 支持 React
+ 🎨 支持主题定制，内置 200+ 个主题变量，支持组件样式动态变化
+ 🍭 支持按需引用

## 示例
![Alt](http://storage.360buyimg.com/hawley-common/tard-image/taro-weapp.jpg)

## 快速上手
请参考[快速上手](/docs/quickstart)章节
## 支持环境
+ Android 5.0+
+ iOS 9.2+
## 贡献者
![Alt](https://avatars.githubusercontent.com/u/51318010?v=4)
![Alt](https://avatars.githubusercontent.com/u/29476081?v=4)

## 链接
+ 仓库地址
+ 意见反馈
+ 更新日志

## 开源协议
本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}