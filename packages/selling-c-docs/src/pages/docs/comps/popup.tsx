import MarkDown from '@/components/markdown'

const markdown = `
# popup


## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 组件标题 | string | - |
| outClose | 是否允许外部点击关闭 | boolean | - |
| align | 头部标题的对齐方式 | string | - |
| isOpened | 组件是否显示 | boolean | - |
| onClose | 组件关闭回调 | Function | - |
| icon | 自定义图标 | React.ComponentType<any> | - |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}