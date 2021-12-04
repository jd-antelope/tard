import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# result


## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| src | 结果提示所需要的图片src | string | - |
| text | 结果提示所需要的文案 | string | - |
| btnText | 按钮配置属性文案 | string | - |
| onClick | 按钮点击回调 | Function | - |
| rect | 图片圆角类型angle,circle | string | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}