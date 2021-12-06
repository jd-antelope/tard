import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# nav-bar


## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| back | 是否需要返回按钮 | boolean | false |
| bgStyle | 头部背景样式 | object, | - |
| onBack | 触发返回事件 | CommonEventFunctio, | - |
| title | 页面标题 | string | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}