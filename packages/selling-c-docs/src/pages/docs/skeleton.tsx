import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = ` 
# skeleton


## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| width | 宽 | number | - |
| height | 高 | number | - |
| boxheight | 外盒子高度 | number | - |
| type | 圆角类型 | Type|string | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}