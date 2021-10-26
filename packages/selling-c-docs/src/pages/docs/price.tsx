import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# price
按钮用于传递用户触摸时会触发的操作

## 使用指南
在 Taro 文件中引入组件
~~~js
import { SlPrice } from '@jd/selling-c-ui'
~~~

## api

### type 现在分为5种类型
~~~js
  small = 'small',  // 24 + 24
  smallMiddle = 'smallMiddle', // 28 + 28
  middle = 'middle', // 24 + 36
  largeMiddle = 'largeMiddle', // 28 + 48
  large = 'large',  // 36 + 60
~~~
### size 价格大小 number

### symbolSize 符号大小 number
  
# price

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| price | 价格 | string|string[] | - |
| originalPrice | 原价 | string | - |
| originalColor | 原价颜色 | string | - |
| color | 颜色 | string | - |
| trigger | 价格后面的内容 | React.ReactNode, | - |
| commissionPrice | 是否展示佣金 | string | - |
| fixedNum | 保留几位小数点 | number | - |
| type | 类型 | Size|string | - |
| size | 大小 | number | - |
| symbolSize | 大小 | number | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}