# tab
### 介绍
价格标签组件
## 代码演示
### 引入
```js
import { SlTagPrice } from 'tard'
```
### 基本用法
```js
<SlTagPrice price="120" /> 
```

### 自定义颜色
设置属性 `color` 可以自定义价格颜色 
```js
<SlTagPrice price="120" color="green" /> 
```

### 自定义字体

```js
<SlTagPrice price="120" color="green" size={28} />  
```

### 自定义标题

```js
<SlTagPrice price="120" title="推广价"/> 
```
        
## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| color | 价格标签颜色 | string | '#FF2929' |
| title | 价格标签title | string | '渠道奖励' |
| price | 价格 | string | - |
| size | 字体大小 | number | 24 |
