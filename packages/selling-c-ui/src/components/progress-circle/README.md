## 介绍
圆环形的进度条组件，支持进度渐变动画。
## 引入
```js
import { SlProgressCircle } from '@jd/selling-c-ui'
```
# 代码演示
## 基础用法
```js
<SlProgressCircle percent={25} text="25%" />
```
## 自定义颜色
```js
<SlProgressCircle percent={25} color="#FF2929" text="自定义颜色" />
```
## 自定义圆环直径
```js
<SlProgressCircle percent={25} size={200} text="自定义圆环直径" />
```

## 自定义进度条宽度
```js
<SlProgressCircle percent={25} size={200} strokeWidth={10} text="自定义进度条宽度" />
```
# API
## Props
|  参数   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| percent | 百分比 | number | 0 |
| size | 百圆环直径，单位为px分比 | number | 100 |
| color | 进度条颜色 | string | #DC8D20 |
| layerColor | 轨道背景颜色 | string | #EFEFEF |
| text | 文字 | string | - |
| strokeWidth | 进度条宽度，单位为px | number | 4 |