import MarkDown from '@/components/markdown'

const markdown = `
# Icon 图标


## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| onClick | 点击事件 | CommonEventFunction | - |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}