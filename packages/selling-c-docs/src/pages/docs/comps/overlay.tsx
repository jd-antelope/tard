import MarkDown from '@/components/markdown'

const markdown = `
# overlay 遮罩


## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}