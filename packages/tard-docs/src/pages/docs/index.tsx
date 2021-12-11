import MarkDown from '@/components/markdown'

const markdown = `# Tard
一套基于Taro框架开发的多端React UI组件库
## 介绍
~Tard~是京东商羚前端团队开源的~taro~组件库, 打造的多端开发解决方案，~Tard~对内承载了商羚的核心业务。
## 版本提示
目前版本处理预发布状态，适用于taro的~react~版本，taro的版本要在3.X以上版本
## 特性
+ 🏠 基于 ~Taro~ 开发 ~UI~ 组件
+ 💎 30+ 个高质量组件，覆盖移动端主流场景
+ 💪 使用 TypeScript 编写，提供完整的类型定义
+ 📖 提供完善的中文文档和组件示例
+ 📦 支持 React
+ 🎨 支持主题定制，内置 200+ 个主题变量，支持组件样式动态变化
+ 🍭 支持按需引用
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

## 如何贡献`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}