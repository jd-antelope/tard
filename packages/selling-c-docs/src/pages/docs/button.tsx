import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# button
按钮用于传递用户触摸时会触发的操作

## 使用指南
在 Taro 文件中引入组件
~~~js
import { SlButton } from '@jd/selling-c-ui'
~~~

## api
type# button
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}