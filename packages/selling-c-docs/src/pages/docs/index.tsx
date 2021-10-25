import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# selling ui of taro
本项目是商羚基于taro搭建的一套ui库，里面完整的适配h5和小程序的配置。

## 特性
+ 支持主题修改，支持组件样式动态变化
+ 使用TS开发，提供了完整的类型定义文件
+ 按需引入
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}