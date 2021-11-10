import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# time-picker


## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| endTime | 是否显示结束时间 | boolean | false |
| isOpened | 打开弹窗 | boolean | false |
| onClose | 关闭回调 | CommonEventFunction | - |
| onOk | 确认回调(返回是array['1990-1-1','2021-1-1']) | CommonEventFunction | - |
| outClose | 遮罩层关闭 | boolean | false |
| title | 左侧时间的title | string | 选中时间 |
| endTitle | 右侧的时间title | string | 结束时间 |
| timeStr | 默认开始时间 | string | 9999-1-1 |
| endTimeStr | 默认结束时间 | string | 9999-1-1 |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}