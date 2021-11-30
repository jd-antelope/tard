
# InputNumber
### 介绍
带加减按钮的数字输入框，用户可以控制每次点击增加的数值，支持小数，同时支持自定义输入框宽度
### 引入
```js
import { SlInputNumber } from '@jd/selling-c-ui'
```
## 代码演示
### 基础用法
该组件为受控组件，开发者需要通过 `onChange` 事件来更新 `value` 值变化，`value` 与 `onChange` 函数必填
```js
const [value1, setValue1] = useState(0)

<SlInputNumber value={value1} onChange={e => setValue1(e)} />
```
### 步长设置
分别设置步长 `step=5`，`step=0.1`
```js
const [value2, setValue2] = useState(0)
const [value3, setValue3] = useState(0)

<SlInputNumber value={value2} step={5} onChange={e => setValue2(e)} />

<SlInputNumber value={value3} step={0.1} onChange={e => setValue3(e)} />
```
### 限制输入范围
`min` 和 `max` 属性分别表示最小值和最大值
```js
const [value4, setValue4] = useState(0)

<SlInputNumber value={value4} min={10} max={20} onChange={e => setValue4(e)} />
```
### 禁用操作
`disabled` 禁用状态下无法点击按钮或修改输入框
```js
const [value5, setValue5] = useState(5)

<SlInputNumber value={value5} disabled onChange={e => setValue5(e)} />
```
### 只读禁用输入框
`readonly` 禁用状态下无法点击按钮或修改输入框
```js
const [value5, setValue5] = useState(5)

<SlInputNumber value={value5} readonly onChange={e => setValue5(e)} />
```
### 自定义按钮大小
通过 `size`、或者 `width` 属性自定义按钮大小
```js
const [value1, setValue1] = useState(0)
<SlInputNumber value={value1} size="large" onChange={e => setValue1(e)} />

<SlInputNumber value={value1} width={150} onChange={e => setValue1(e)} />
```
# API
## Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
|  value  | 必填，输入框当前值，开发者需要通过 onChange 事件来更新 value 值  | number ｜ string | 1 |
|  min  | 最小值限制  | number | 0 |
|  max  | 最大值限制  | number | 9999 |
|  step  | 每次点击改变的间隔大小  | number | 1 |
|  disabled  | 是否禁止输入，禁止点击按钮  | boolean | false |
|  readonly  | 是否禁止输入，但不禁止点击按钮  | boolean | false |
|  size  | 组件的大小  | 'normal' ｜ 'large' | 'normal'  |
|  width  | 不包括两侧按钮，单位根据环境转为 rpx 或 rem | number | 120 |

## Event
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
|  onChange  | 输入框值改变时触发的事件  | 输入框当前值 value |
|  onBlur  | 输入框值失去焦点时触发的事件  | event |
|  onErrorInput  | 输入框尝试输入错误数组触发的事件  | ({ type: OVER | LOW | DISABLED, errorValue: number}) |

## 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @slc-input-number-text-color | @color-text-base |
|  @slc-input-number-font-size | @font-size-base |
|  @slc-input-number-font-size-lg  | @font-size-xl |
|  @slc-input-number-btn-color | @primary-color |
|  @slc-input-number-btn-size  | 30px |
|  @slc-input-number-btn-size-lg  | 36px |
|  @slc-input-number-width-min | 36px |
|  @slc-input-number-width-min-lg | 80px |
|  @slc-input-number-btn-size  | 120px |
