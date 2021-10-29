import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# rate
评分组件，可自定义评分星星图标的大小、间隔、评分数

## 使用指南
在 Taro 文件中引入组件
~~~js
import { SlRate } from '@jd/selling-c-ui'
~~~


## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| value | 当前评分,需要通过 onChange 事件来更新 value 值，必填 | Number | 0 |
| max | 最大 | Number | 5 |
| size | 评分星星大小 | string | - |
| margin | 按钮颜色 | Number / String	 | 20 |
| activeColor | 选中星星的颜色 | string | '#ffca3e' |


## 事件
|  事件名称   | 说明  | 返回参数 |
|  ----      | ---- |   ----  |
|  onChange  | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读  | 当前值 value |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}