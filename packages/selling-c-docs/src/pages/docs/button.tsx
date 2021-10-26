import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# button
按钮用于传递用户触摸时会触发的操作

## 使用指南
在 Taro 文件中引入组件
~~~js
import { SlButton } from '@jd/selling-c-ui'
~~~

## api
type# button

# button

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| fill | 是否填充背景 | boolean | - |
| full | 自动充满父容器 | boolean | - |
| size | 按钮尺寸大小 | string | - |
| color | 按钮颜色 | string | - |
| fillColor | 按钮填充颜色 | string | - |
| borderColor | 边框颜色 | string | - |
| radius | 按钮自定义圆角 | number | - |
| loading | 设置按钮的载入状态 | boolean | false |
| disabled | 设置按钮为禁用态（不可点击） | boolean | false |
| onClick | 点击按钮时触发 | CommonEventFunction | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}