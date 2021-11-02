## 介绍
用于展示操作的当前进度。
## 引入
```js
import { SlProgress } from '@jd/selling-c-ui'
        
```
# 代码演示
## 基础用法
```js
<SlProgress percent={30} />
```
## 自定义线条粗细
```js
<SlProgress percent={30} strokeWidth={8} />
```
## 自定状态
```js
<SlProgress color="#FF2929" percent={70} status="error" />
```

## 自定文案
```js
<SlProgress percent={70} pivotText="700/1000" />
```

## 自定隐藏文案
```js
<SlProgress percent={70} showPivot={false} />
```
# API
## Props
|  参数   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| percent | 进度百分比 | number | 0 |
| strokeWidth | 进度条粗细 | number | 4 |
| color | 进度条颜色 | string | #DC8D20 |
| trackColor | 轨道背景颜色 | string | #EFEFEF |
| pivotText | 文字 | string | - |
| showPivot | 是否显示文字 | boolean | true |
| status | 进度条状态 | 'progress' ｜ 'error' ｜ 'success' | - |