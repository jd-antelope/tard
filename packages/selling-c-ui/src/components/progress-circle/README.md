# ProgressCircle 圆形进度条
### 介绍
圆环形的进度条组件，支持进度渐变动画
> ⚠️ 该组件通过svg实现，svg不支持rpx，故小程序和H5单位均转换为rem
### 引入
```js
import { SlProgressCircle } from 'tard'
```
## 代码演示
### 基础用法
`percent` 属性表示进度条的进度，表示 `percent / 100`
```js
<SlProgressCircle percent={25} text="25%" />
```
### 自定义颜色
通过 `color` 属性来控制进度条颜色， `layerColor` 属性来控制轨道颜色
```js
<SlProgressCircle percent={25} color="#FF2929" text="自定义颜色" />
```
### 自定义圆环直径
通过 `size` 属性设置圆环直径
```js
<SlProgressCircle percent={25} size={300} text="自定义圆环直径" />
```

### 自定义进度条宽度
通过 `strokeWidth` 属性设置进度条宽度
```js
<SlProgressCircle percent={25} strokeWidth={10} text="自定义进度条宽度" />
```
## API
### Props
|  参数   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| percent | 百分比 | number | 0 |
| size | 百圆环直径，单位自适应为rem | number | 200 |
| color | 进度条颜色 | string | #DC8D20 |
| layerColor | 轨道背景颜色 | string | #EFEFEF |
| text | 文字 | string | - |
| strokeWidth | 进度条宽度，单位自适应为rem | number | 4 |