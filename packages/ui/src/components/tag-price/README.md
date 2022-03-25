# TabPrice 价格标签
### 介绍
价格标签组件
### 引入
```js
import { TagPrice } from 'tard'
```
## 代码演示
### 基本用法
```js
<TagPrice price="120" /> 
```

### 自定义颜色
设置属性 `color` 可以自定义价格颜色 
```js
<TagPrice price="120" color="green" /> 
```

### 自定义字体
设置属性 `size` 可以自定义价格大小 
```js
<TagPrice price="120" color="green" size={28} />  
```

### 自定义标题
设置属性 `title` 可以修改标题文字 
```js
<TagPrice price="120" title="推广价"/> 
```
        
## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| color | 价格标签颜色 | string | - |
| title | 价格标签title | string | - |
| price | 价格 | string | - |
| size | 字体大小 | number | 24 |


### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  --tag-price-color  |  var(--color-primary) |
|  --tag-price-padding  |  3px 10px |
|  --tag-price-text-size  |  24px |
|  --tag-price-border-radius  |  var(--border-radius-sm) |
