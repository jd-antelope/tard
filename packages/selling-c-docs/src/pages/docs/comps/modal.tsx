import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# modal


## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 元素的标题 | string | - |
| isOpened | 是否显示模态框 | boolean | false |
| content | 元素的内容 | string | - |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | boolean | true |
| cancelText | 取消按钮的文本 | string | - |
| confirmText | 确认按钮的文本 | string | - |
| onClose | 触发关闭时的事件 | CommonEventFunction | - |
| onCancel | 点击取消按钮触发的事件 | CommonEventFunction | - |
| onConfirm | 点击确认按钮触发的事件 | CommonEventFunction | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}