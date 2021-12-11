import MarkDown from '@/components/markdown'

const markdown = `# Cell 单元格
### 介绍
单元格
### 引入
~~~js
import { SlCell } from 'tard'
~~~
## 代码演示
### 基础用法
~~~js
<SlCell onClick={() => { console.log("触发点击事件")} } title={"左侧标题"} value={"右侧内容"}/>
~~~

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| onClick | 点击事件 | CommonEventFunction | - |
| title | 左侧标题 | number|string | - |
| value | 右侧内容 | value | - |
| icon | icon图标 | keyofIconProps.TIconType | - |
| height | 单元格高度 | number|undefined | - |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}