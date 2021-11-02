import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# image-text-item


## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| isUp | 是否显示图片在上 | 	boolean | true |
| propsData | 需要传入的内容 | 	Array | - |
| onClick | 点击item触发事件 | 	CommonEventFunction | - |


`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}