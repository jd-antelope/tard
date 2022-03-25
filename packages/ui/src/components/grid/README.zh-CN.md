# Grid 宫格
### 介绍
宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。
### 引入
```js
import { Grid, GridItem } from 'tard'
```
## 代码演示
### 基础用法
通过 `url` 属性设置格子内的图标，`text` 属性设置文字内容。
```js
<Grid>
  {
    new Array(4).fill('').map((_, i) => (
      <GridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</Grid>
```

### 自定义列数
默认一行展示四个格子，可以通过 `columnNum` 自定义列数。
```js
<Grid columnNum={ 3 }>
  {
    new Array(3).fill('').map((_, i) => (
      <GridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</Grid>
```

### 边框
通过 `border` 属性展示格子边框
```js
<Grid border>
  {
    new Array(8).fill('').map((_, i) => (
      <GridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</Grid>
```

### 自定义图片大小
通过 `url` 属性设置格子内的图标，`text` 属性设置文字内容。
```js
<Grid iconSize={ 40 }>
  {
    new Array(4).fill('').map((_, i) => (
      <GridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</Grid>
```

### 自定义内容
通过插槽可以自定义格子展示的内容。
```js
<Grid>
  {
    new Array(4).fill('').map((_, i) => (
      <GridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</Grid>
```

### 内容横排
修改属性 `direction`，可以让宫格的内容顺序更换
```js
<Grid direction='left'>
  {
    new Array(4).fill('').map((_, i) => (
      <GridItem 
        key={ i }
        text="文字" 
        url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
      />
    ))
  }
</Grid>
```

## API
### Grid Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| columnNum | 列数 | number | 4 |
| iconSize | 图标大小，默认单位为px | number | 60px |
| border | 是否支持边框 |	boolean | false |
| direction | 格子内容排列的方向 | 'top'｜'bottom'｜'left'｜'right' | false |
| clickable | 是否开启格子点击反馈 | boolean | false |

### GridItem Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| url | 图片链接 | string | - |
| icon | icon类型 | string | - |
| text | 文字 | string | - |
| columnNum | 列数 | number | 4 |
| iconSize | 图标大小，默认单位为px | number | 60px |
| border | 是否支持边框 |	boolean | false |
| direction | 格子内容排列的方向 | 'top'｜'bottom'｜'left'｜'right' | false |

### GridItem Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击格子时触发 | - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  --grid-bg | var(--color-white) |
|  --grid-item-padding-y | 18px |
|  --grid-item-image-size | 60px |
|  --grid-item-text-padding | 12px |
|  --badge-dot-size  | 24px |
|  --grid-item-width  | 100% |
