import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| color | 颜色 | string | - |
| type | 类型 | 'default'|'ios'|'loading' | default |
| isMask | 是否有全局定位 | boolean | - |
| distance | loading大小 | number | - |
| onClick | 点击事件 | CommonEventFunction | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}