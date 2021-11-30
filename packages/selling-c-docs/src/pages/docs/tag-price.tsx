import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# tab
价格标签组件
## 代码演示
### 引入
文件中引入组件
~~~js
import { SlTagPrice } from '@jd/selling-c-ui'
~~~
### 基本用法

~~~js
<SlTagPrice price="120" /> 
~~~

### 自定义颜色

~~~js
<SlTagPrice price="120" color="green" /> 
~~~

### 自定义字体

~~~js
<SlTagPrice price="120" color="green" size={28} />  
~~~

### 自定义标题

~~~js
<SlTagPrice price="120" title="推广价"/> 
~~~
        
## Api
### props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| color | 价格标签颜色 | string | '#FF2929' |
| title | 价格标签title | string | '渠道奖励' |
| price | 价格 | string | - |
| size | 字体大小 | number | 24 |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}