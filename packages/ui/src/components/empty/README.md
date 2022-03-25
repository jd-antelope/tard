# Empty 空状态
### 介绍
该组件封装了日常业务中常见的空数据的展示效果
### 引入
```js
import { Empty } from 'tard'
```
## 使用指南
### 基础用法
最简单的使用是通过src设置一张默认显示图片即可
```js
  <Empty src="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/hsresult/no-wifi.png" />
```
### 图文混排效果
通过指定src 与 text 实现图文混排的效果
```js
<Empty
 text="网络错误"
 src="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/hsresult/no-wifi.png" />
```

### 支持用户反馈操作
可通过 btnText 属性展示默认按钮，支持用户交互操作
```js
<Empty
  text="网络错误"
  src="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/hsresult/no-wifi.png"
  btnText="重试"
/>
```

## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| src | 默认展示图片路径 | sting | - |
| rect | 默认图片默认圆角类型 | rectType | rect |
| text | 默认提示文案 | sting | - |
| btnText | 默认按钮的展示文案 | sting | - |

### RectType 
|  值   | 说明 |
|  ----  | ----  | 
|  rect  | 矩形 |
|  angle  | 值为24px的倒角 |
|  circle  | 圆形 |

### Events
|  事件名称   | 说明  | 回调参数 |
|  ----      | ---- |   ----  |
|  onClick  | 按钮点击回调 | - |

### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
|  --empty-image-size  |  200px |
|  --empty-image-size  |  200px |
|  --empty-image-radius  |  24px |
|  --empty-text-size  |  32px |
