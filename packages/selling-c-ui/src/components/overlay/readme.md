
# Overlay 遮罩层
### 介绍
创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作
### 引入
```js
import { SlOverlay } from '@jd/selling-c-ui'
```
## 代码演示
### 基础用法
通过 `show` 属性控制是否显示遮罩层， `onClick` 属性为点击遮罩层触发事件
```js
const [show, setShow] = useState(false)

<SlButton onClick={() => setShow(true)}>显示遮罩层</SlButton>
<SlOverlay show={show} onClick={() => setShow(false)} />
```

### 嵌入内容
通过默认插槽可以在遮罩层上嵌入任意内容
```js
const [show, setShow] = useState(false)

<SlButton onClick={() => setShow(true)}>嵌入内容</SlButton>
<SlOverlay show={show} onClick={() => setShow(false)}>
    <View style="display: flex; align-items: center; justify-content: center; height: 100%;" >
    <View style='width:200px; height:200px; background: #fff'></View>
</View>
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
|  show  | 是否展示遮罩层  | boolean | false |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClose | 触发关闭时的事件 | - | 

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @slc-overlay-bg-color | @overlay-bg-color |