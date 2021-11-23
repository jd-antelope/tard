import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# Badge
## 介绍
在右上角展示徽标数字或小红点。
## 引入
~~~js
import { SlBadge } from '@jd/selling-c-ui'
~~~
# 代码演示
## 基础用法
设置 value 属性后，Badge 会在子元素的右上角显示对应的徽标
~~~js
<SlBadge value={5}>
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge value={10}>
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge value='hot'>
    <SlButton>按钮</SlButton>
</SlBadge>
~~~
## 小红点
通过 dot 来显示小红点
~~~js
<SlBadge dot >
    <SlButton>按钮</SlButton>
</SlBadge>
~~~
## 最大值
设置 maxValue 属性后，当 value 的数值超过最大值时，会自动显示为 {maxValue}+
~~~js
<SlBadge dot >
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge value={20} maxValue={9}>
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge value={50} maxValue={20}>
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge value={200} maxValue={99}>
    <SlButton>按钮</SlButton>
</SlBadge>
~~~
## 自定义颜色
通过 color 属性来设置徽标的颜色
~~~js
<SlBadge value={8} color="blue">
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge value={76} color="blue">
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge value='NEW' color="blue">
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge dot color="blue">
    <SlButton>按钮</SlButton>
</SlBadge>
~~~

## 自定义内容
通过 content 插槽可以自定义徽标的内容，比如插入一个图标
~~~js
<SlBadge content={<SlIcon value='bell' size={12}></SlIcon>}>
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge content={<SlIcon value='check' size={12}></SlIcon>}>
    <SlButton>按钮</SlButton>
</SlBadge>

<SlBadge content={<SlIcon value='arrow-down' size={12}></SlIcon>}>
    <SlButton>按钮</SlButton>
</SlBadge>
~~~

## 独立展示
当 Badge 没有子元素时，会作为一个独立的元素进行展示
~~~js
<SlBadge value={5} />

<SlBadge value={100} maxValue={99} />

<SlBadge value='NEW' />

<SlBadge value={5} color="blue" />

<SlBadge content={<SlIcon value='bell' size={12}></SlIcon>} />
~~~
## Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| dot | 角标红点 | boolean | false |
| value | 角标内容 | string|number | - |
| maxValue | 最大值，超过最大值会显示 {maxValue}+，仅当 value 为数字时有效 | number | - |
| color | 徽标背景颜色 | string | 主题色 |
| content | 自定义内容 |  React.ReactNode | - |

## 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @slc-badge-color | @color-white |
|  @slc-badge-bg-color | @color-error |
|  @slc-badge-bg  | @slc-badge-bg-color |
|  @slc-badge-font-size | @font-size-xs |
|  @slc-badge-dot-size  | 20px |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}