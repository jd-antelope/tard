import MarkDown from '@/components/markdown'

const markdown = `# Tard
一套基于Taro框架开发的多端React UI组件库

## 介绍
~Tard~是京东商羚前端团队开源的~taro~组件库, 打造的多端开发解决方案，~Tard~对内承载了商羚的核心业务。
## 版本提示
目前版本处理预发布状态，适用于taro的~react~版本，taro的版本要在3.X以上版本
## 特性
+ 基于 ~Taro~ 开发 ~UI~ 组件
+ 支持定制主题，支持组件样式动态变化
+ 使用TS开发，提供了完整的类型定义文件
+ 支持按需引用

## 快速上手
请参考[快速上手](/docs/quickstart)章节

## 谁在使用

## 如何贡献`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}