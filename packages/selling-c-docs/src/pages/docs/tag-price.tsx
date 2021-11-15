import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# tab
价格标签组件

## 使用指南
在 Taro 文件中引入组件
~~~js
import { SlTagPrice } from '@jd/selling-c-ui'
~~~
## 基本用法

~~~js
<SlTagPrice price="120" /> 
~~~

## 自定义颜色、title、字体

~~~js
<SlTagPrice price="120" color="green" /> 
<SlTagPrice price="120" color="green" size={28} /> 
<SlTagPrice price="120" color="green" size={28} title="推广价"/> 
~~~`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}