# Button 按钮
### 介绍
按钮用于传递用户触摸时会触发的操作
### 引入
```js
import { SlButton } from 'tard'
```

## 使用指南
### 按钮类型
按钮默认支持 `default`、`primary`、`success`、`warning`、`danger` `info`六种类型，默认为default
```js
<SlButton type="primary">主要按钮</SlButton>
<SlButton type="info">信息按钮</SlButton>
<SlButton type="default">默认按钮</SlButton>
<SlButton type="danger">危险按钮</SlButton>
<SlButton type="warning">警告按钮</SlButton>
<SlButton type="success">成功按钮</SlButton>
```
### 边框按钮
设置 `border` 属性设置按钮的背景色为白色,文字和边框颜色为背景色色值
```js
<SlButton border type="primary">主要按钮</SlButton>
<SlButton border type="info">信息按钮</SlButton>
<SlButton border type="warning">警告按钮</SlButton>
<SlButton border type="danger">危险按钮</SlButton>
```
### 按钮形状
设置 `round` 属性设置按钮形状 支持两种类型`rect`(矩形)、`circle`（圆形)两种规格，默认为倒角为16px的圆角
```js
<SlButton  round='rect' type="primary">主要按钮</SlButton>
<SlButton  type="info">信息按钮</SlButton>
<SlButton  round='circle' type="warning">警告按钮</SlButton>
```

### 自定义背景颜色
设置 `fillColor` 属性自定义安妮背景色,支持css渐变色值、支持border边框属性
```js
<SlButton  fillColor='#6F16E8'>单色按钮</SlButton>
<SlButton  fillColor='linear-gradient(90deg, rgba(133,44,255,1) 0%,rgba(97,16,206,1) 100%)'>
渐变按钮
</SlButton>
<SlButton  border fillColor='#6F16E8'>单色按钮</SlButton>
```
### 自定义按钮文字颜色
设置 `color` 属性可以指定按钮文字颜色
```js
<SlButton color="red">红色文字</SlButton>
<SlButton color='green'>绿色文字</SlButton>
<SlButton color='blue' >蓝色文字</SlButton>
```
### 自定义按钮圆角
除了使用round属性指定`rect`、`circile`圆角两种属性外，也可以通过`radius`属性指定任意圆角数值
```js
<SlButton  type='primary'>默认</SlButton>
<SlButton  radius={24} type='info'>24px</SlButton>
<SlButton  radius={36} type='warning'>36px</SlButton>
```

### 禁用状态
通过设置 `disabled` 属性设置按钮的禁用状态
```js
<SlButton  disabled border type="primary">主要按钮</SlButton>
<SlButton  disabled border type="info">信息按钮</SlButton>
<SlButton  disabled border type="warning">警告按钮</SlButton>
<SlButton  disabled type="danger">危险按钮</SlButton>
<SlButton  disabled type="default">默认按钮</SlButton>
```

### 按钮尺寸
通过设置 `size` 属性指定几种默认的尺寸，属性值包括`large`、`normal`、`small`、`mini`四个值、normal为默认,
也可以通过full属性设置按钮通栏效果
```js
<SlButton  full type='primary'>通栏按钮</SlButton>
<SlButton  size='large' type='info'>大型按钮</SlButton>
<SlButton  size='normal' type='danger'>普通按钮</SlButton>
<SlButton  size='small' type='warning'>小型按钮</SlButton>
<SlButton  size='mini' type='success'>迷你按钮</SlButton>
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| type | 按钮类型可选项为 default,primary,success,warning,danger,info| string | default |
| fill | 是否填充背景 | boolean | false |
| full | 自动充满父容器 | boolean | false|
| size | 按钮尺寸大小 | string | - |
| round | 是否圆角 | boolean | false|
| color | 按钮颜色 | string | - | 
| fillColor | 按钮填充颜色 | string | - |
| borderColor | 边框颜色 | string | - |
| border | 是否显示边框 | boolean | false |
| radius | 按钮自定义圆角 | number | - |
| customStyle | 自定义style样式对象 | cssObject | {} |
| disabled | 设置按钮为禁用态（不可点击） | boolean | false |

### Events
|  事件名   | 说明  | 回调参数 | 
|  ----  | ----  | ---- | 
| onClick | 点击按钮时触发 | - | 


### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
| @button-height | 76px |
| @button-default-v-padding | 40px |
| @button-min-width | 192px |
| @button-min-width-mini | 120px |
| @button-height-mini | 32px |
| @button-mini-text-size | 24px |
| @button-mini-v-padding | 12px |
| @button-min-width-small | 144px |
| @button-height-small | 56px |
| @button-small-text-size | 28px |
| @button-small-v-padding | 24px |
| @button-min-large-width | 360px |
| @button-large-height | 96px |
| @button-large-text-size | 32px |
| @button-large-v-padding | 48px |
| @button-radius-size | 38px |
| @button-color-danger | #FA2C19 |
| @button-color-info | #496FF2 |
| @button-color-success | #1AD054 |
| @button-color-warning | #F7B500 |
