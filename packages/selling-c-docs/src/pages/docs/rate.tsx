import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| size | 评分星星大小 | number; | 20 |
| value | 当前评分,开发者需要通过onChange事件来更新value值，必填 | number; | - |
| max | 最大评分 | number; | 5 |
| margin | 星星间隔,单位根据环境自动转为rpx或rem | number; | 5 |
| onChange | 输入框值改变时触发的事件，开发者需要通过onChange事件来更新value值变化，但不填写onChange函数时，该组件只读 | CommonEventFunction; | - |
| activeColor | 高亮的星星的颜色 | string | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}