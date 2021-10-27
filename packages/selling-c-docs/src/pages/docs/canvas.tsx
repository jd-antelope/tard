import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `fsdf
# canvas


## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| width | 宽度 | number | - |
| height | 高度 | number | - |
| isMask | 是否有遮照 | boolean | - |
| isOpen | 是否打开 | boolean | - |
| onClose | 关闭回调 | Function | - |
| contentCallback | 内容方法@paramctxcanvas实例@paramdpr数字计算 | (ctx,dpr)=>void | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}