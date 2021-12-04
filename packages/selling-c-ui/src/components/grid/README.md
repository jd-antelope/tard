# Grid

### 介绍
宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 代码演示
### 引入
```js
import { SlGrid, SlGridItem } from 'tard'
```
### 基础用法
通过 `url` 属性设置格子内的图标，`text` 属性设置文字内容。
```js
<SlGrid>
  {
    new Array(4).fill('').map((_, i) => (
      <SlGridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</SlGrid>
```

### 自定义列数
默认一行展示四个格子，可以通过 `columnNum` 自定义列数。
```js
<SlGrid columnNum={ 3 }>
  {
    new Array(3).fill('').map((_, i) => (
      <SlGridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</SlGrid>
```

### 边框
通过 `border` 属性展示格子边框
```js
<SlGrid border>
  {
    new Array(8).fill('').map((_, i) => (
      <SlGridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</SlGrid>
```

### 自定义图片大小
通过 `url` 属性设置格子内的图标，`text` 属性设置文字内容。
```js
<SlGrid iconSize={ 40 }>
  {
    new Array(4).fill('').map((_, i) => (
      <SlGridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</SlGrid>
```

### 自定义内容
通过插槽可以自定义格子展示的内容。
```js
<SlGrid>
  {
    new Array(4).fill('').map((_, i) => (
      <SlGridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</SlGrid>
```

### 内容排版——横向
修改属性 `direction`，可以让宫格的内容顺序更换
```js
<SlGrid direction='left'>
  {
    new Array(4).fill('').map((_, i) => (
      <SlGridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</SlGrid>
```

## API
### Grid Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| columnNum | 列数 | number | 4 |
| iconSize | 图标大小，默认单位为px | number | 60px |
| border | 是否支持边框 |	boolean | down |
| direction | 格子内容排列的方向 | 'top'|'bottom'|'left'|'right' | false |
| clickable | 是否开启格子点击反馈 | boolean | false |

### GridItem Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| url | 图片链接 | string | - |
| icon | icon类型 | string | - |
| text | 文字 | string | - |
| columnNum | 列数 | number | 4 |
| iconSize | 图标大小，默认单位为px | number | 60px |
| border | 是否支持边框 |	boolean | down |
| direction | 格子内容排列的方向 | 'top'|'bottom'|'left'|'right' | false |

### GridItem Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击格子时触发 | - |
### 样式变量
组件提供了下列 Less 变量，可用于自定义样式
|  名称  | 默认值 |
|  ---- | ---- |
|  @slc-grid-item-padding-y | 18px |
|  @slc-grid-item-image-size | 60px |
|  @slc-grid-item-text-padding | 12px |
|  @slc-badge-dot-size  | 24px |
