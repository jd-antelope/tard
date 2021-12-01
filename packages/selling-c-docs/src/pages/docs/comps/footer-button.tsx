import MarkDown from '@/components/markdown'

const markdown = `
# footer-button


## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| name | 按钮名字 | string | 按钮 |
| onClick | 点击事件 | CommonEventFunction | - |
| replaceContent | 自定义按钮内容 | React.ReactNode | - |
| color | 按钮颜色 | string | - |
| background | 填充颜色 | string | - |
| padding | 外边框的padding | string | 20px |
| radius | 按钮radius | string | 0 |
| lineHeight | 按钮高度 | string | 40px |
| doubleBtn | 是否为双按钮 | boolean | false |
| secondName | 第二个按钮文字 | string | 取消 |
| secColor | 第二个按钮按钮颜色 | string | - |
| secBackground | 第二个按钮填充颜色 | string | - |
| secClick | 第二个按钮点击事件 | CommonEventFunction | - |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}