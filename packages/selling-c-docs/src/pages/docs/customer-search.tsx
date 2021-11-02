import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# customer-seacher


## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| value | 输入框的初始内容 | 	string | - |
| placeholder | 输入框为空时占位符 | 	string | - |
| disabled | 是否禁用 | 	boolean | false |
| onFocus | 输入框聚焦时触发， | BaseEventOrigFunction<inputForceEventDetail> | - |
| onBlur | 输入框聚焦时触发， | BaseEventOrigFunction<inputValueEventDetail>| - |
| onConfirm | 点击完成按钮时触发 | BaseEventOrigFunction<inputValueEventDetail> | - |

`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}