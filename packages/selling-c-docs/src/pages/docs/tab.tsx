import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = ` 
# tab

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| tabList | tab列表 | array | - |
| current | 当前选中的tab | number | - |
| className | 组件外部自定义类名 | string | - |
| height | tab的高度 | string | - |
| onClick | 点击或滑动时触发事件 | function | - |
| customStyle | tab的排布方式 | string | - |
| tabDirection | 是否滚动 | string | - |
| scroll | 是否支持手势滑动切换内容页，当tabDirection='vertical'时，无论是否设置，都不支持手势滑动切换内容页 | boolean | - |
| swipeable | 是否开启切换动画 | boolean | - |
| animated | 自定义选中标签的颜色 | boolean | - |
| activeColor | undefined | string | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}