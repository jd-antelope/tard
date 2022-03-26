# Badge 徽标
### 介绍
在右上角展示徽标数字或小红点
### 引入
```js
import { Badge } from 'tard'
```
## 代码演示
### 基础用法
设置 `value` 属性后， `Badge` 会在子元素的右上角显示对应的徽标
```js
<Badge value={5}>
    <Button>按钮</Button>
</Badge>

<Badge value={10}>
    <Button>按钮</Button>
</Badge>

<Badge value='hot'>
    <Button>按钮</Button>
</Badge>
```

### 小红点
通过 `dot` 来显示小红点
```js
<Badge dot >
    <Button>按钮</Button>
</Badge>
```
### 最大值
设置 `maxValue` 属性后，当 `value` 的数值超过最大值时，会自动显示为 `{maxValue}+`
```js
<Badge dot >
    <Button>按钮</Button>
</Badge>

<Badge value={20} maxValue={9}>
    <Button>按钮</Button>
</Badge>

<Badge value={50} maxValue={20}>
    <Button>按钮</Button>
</Badge>

<Badge value={200} maxValue={99}>
    <Button>按钮</Button>
</Badge>
```

### 自定义颜色
通过 `color` 属性来设置徽标的颜色
```js
<Badge value={8} color="blue">
    <Button>按钮</Button>
</Badge>

<Badge value={76} color="blue">
    <Button>按钮</Button>
</Badge>

<Badge value='NEW' color="blue">
    <Button>按钮</Button>
</Badge>

<Badge dot color="blue">
    <Button>按钮</Button>
</Badge>
```
### 自定义内容
通过 `content` 插槽可以自定义徽标的内容，比如插入一个图标
```js
<Badge content={<Icon value='bell' size={12}></Icon>}>
    <Button>按钮</Button>
</Badge>

<Badge content={<Icon value='check' size={12}></Icon>}>
    <Button>按钮</Button>
</Badge>

<Badge content={<Icon value='arrow-down' size={12}></Icon>}>
    <Button>按钮</Button>
</Badge>
```

### 独立展示
当 `Badge` 没有子元素时，会作为一个独立的元素进行展示
```js
<Badge value={5} />

<Badge value={100} maxValue={99} />

<Badge value='NEW' />

<Badge value={5} color="blue" />

<Badge content={<Icon value='bell' size={12}></Icon>} />
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| dot | 角标红点 | boolean | false |
| value | 角标内容 | string|number | - |
| maxValue | 最大值，超过最大值会显示 {maxValue}+，仅当 value 为数字时有效 | number | - |
| color | 徽标背景颜色 | string | 主题色 |
| content | 自定义内容 |  React.ReactNode | - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  --badge-color | var(--color-white) |
|  --badge-bg-color | var(--color-error) |
|  --badge-bg  | var(--badge-bg-color) |
|  --badge-font-size | var(--font-size-xs) |
|  --badge-dot-size  | 20px |
|  --badge-border-radius | calc(var(--badge-font-size) * .7) |
|  --badge-box-shadow  | 0 4px 8px 0 rgba(var(--badge-bg-color), .2) |