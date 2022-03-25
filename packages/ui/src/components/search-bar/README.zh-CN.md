# SearchBar 搜索
### 介绍
带搜索按钮的输入框。
### 引入
```js
import { SearchBar } from 'tard'
```
## 代码演示
### 基础用法
```js
const [value, setValue] = useState('')

<SearchBar value={value} onChange={(e) => setValue(e)} />
```
### 自定义搜索框形状
通过 `shape` 属性可以自定义搜索框形状
```js
const [value, setValue] = useState('')

<SearchBar value={value} shape="square" onChange={(e) => setValue(e)} />
```     
        
### 输入框居中对齐
通过 `inputAlign` 属性可以自定义输入框对齐方式，可选值为 center、right
```js
const [value, setValue] = useState('')

<SearchBar value={value} inputAlign="center" onChange={(e) => setValue(e)} />
```

### 取消按钮
`SearchBar` 组件提供了 `onCancel` 事件，配置 `showCancel` 显示取消按钮， `cancel` 事件在点击搜索框右侧取消按钮时触发
```js
const [value, setValue] = useState('')

<SearchBar value={value} showCancel onChange={(e) => setValue(e)} onCancel={() => setToastVisible(true)} />
```

### 自定义placeholder
```js
const [value, setValue] = useState('')

<SearchBar value={value}  placeholder="搜索商品热门关键词" onChange={(e) => setValue(e)} />
```

### 禁用搜索框
通过 `disabled` 属性禁用搜索框
```js
const [value, setValue] = useState('')

<SearchBar value={value}  disabled onChange={(e) => setValue(e)} />
```

### 自定义背景色
通过 `background` 属性可以设置搜索框外部的背景色
```js
const [value, setValue] = useState('')

<SearchBar value={value}  background="#FF2929" onChange={(e) => setValue(e)} />
```
## API
### Props
| 属性        | 说明                                                          | 类型                                                  | 默认值  |
| ----------- | ------------------------------------------------------------- | ----------------------------------------------------- | ------- |
| value       | 输入框的初始内容，开发者需要通过 onChange 事件来更新 value 值 | string                                                | -       |
| placeholder | 输入框为空时占位符                                            | string                                                | -       |
| maxLength   | 最大输入长度                                                  | number                                                | 140     |
| fixed       | 是否固定顶部                                                  | boolean                                               | false   |
| inputAlign  | 输入框内容对齐方式                                            | `right` ｜ `center`                                   | `right` |
| fixed       | 是否固定顶部                                                  | boolean                                               | false   |
| showCancel  | 是否在搜索框右侧显示取消按钮                                  | boolean                                               | false   |
| cancelText  | 取消按钮文字                                                  | string                                                | '取消'  |
| background  | 自定义背景色                                                  | `square` ｜ `round`                                   | `round` |
| shape       | 输入框形状                                                    | function                                              | -       |
| disabled    | 是否禁止输入                                                  | boolean                                               | false   |
| focus       | 是否聚焦                                                      | boolean                                               | false   |
| inputType   | 输入框输入类型                                                | `text`             ｜ `number` ｜ `idcard` ｜ `digit` | `text`  |
| onChange    | 输入框值改变时触发的事件                                      | function                                              | -       |
| onCancel    | 右侧按钮点击触发事件                                          | function                                              | -       |
| onClick     | 搜索框形状                                                    | function                                              | -       |
| onFocus     | 输入框聚焦时触发                                              | function                                              | -       |
| onBlur      | 输入框聚焦时触发                                              | function                                              | -       |
| onConfirm   | 点击完成按钮时触发                                            | function                                              | -       |

### 样式变量
| 名称                             | 默认值                        | 描述 |
| -------------------------------- | ----------------------------- | ---- |
| --search-bar-font-size           | 28px                          | -    |
| --search-bar-input-height        | 68px                          | -    |
| --search-bar-input-padding       | 44px                          | -    |
| --search-bar-btn-padding-left    | 36px                          | -    |
| --search-bar-placeholder-padding | 14px                          | -    |
| --search-bar-input-bg-color      | #F7F8FA                       | -    |
| --search-bar-placeholder-color   | var(--color-text-placeholder) | -    |
| --search-bar-btn-color           | var(--color-text)        | -    |
| --search-bar-vertical-padding    | 24px                          | -    |
| --search-bar-horizontal-padding  | 36px                          | -    |
| --search-bar-input-radius        | 40px                          | -    |