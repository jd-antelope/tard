
# Icon 图标
### 介绍
基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用
### 引入
```js
import { Icon } from 'tard'
```
## 代码演示
### 基础用法
```js
<Icon value='clock' size='30' color='#F00'></Icon>
```
## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
|  value  | 图标名称  | string | IconBaseProps  | - |
|  color  | 图标颜色  | string | inherit |
|  size  | 图标颜色  | string | inherit |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击事件 | CommonEventFunction |


