import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = ` 
# tab-pane


## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| tabDirection | Tab方向，请跟AtTabs保持一致 | 'horizontal'|'vertical' | 'horizontal' |
| current | 当前选中的标签索引值，从0计数，请跟AtTabs保持一致 | number | 0 |
| index | tabPane排序，从0计数 | number | 0 |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}