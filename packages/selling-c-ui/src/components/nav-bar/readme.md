
# NavBar 头部导航
### 介绍
为页面提供导航功能，常用于页面顶部。
### 引入
```js
import { SlNavBar } from '@jd/selling-c-ui'
```
## 代码演示
### 基本用法
通过 `title` 属性设置导航栏标题
```js
<SlNavBar title="标题" />
```

### 返回上一级
在导航栏实现返回上级功能，设置 `leftIcon` 属性显示左侧箭头，通过 `leftText` 属性来设置左边文字
```js
const onClickLeft = () => {
    // todo改为Toast
    console.log('back')
}

<SlNavBar title="标题" leftIcon leftText='返回' onClickLeft={onClickLeft} />
```

### 自定义左侧图标
设置 `leftIconType` 属性来设置左边图标
```js
<SlNavBar title="标题"
    leftIcon
    leftText='返回'
    leftIconType='arrow-left'
    onClickLeft={onClickLeft}
/>
```

### 自定义左侧图标
设置 `leftIconType` 属性来设置左边图标
```js
<SlNavBar title="标题"
    leftIcon
    leftText='返回'
    leftIconType='arrow-left'
    onClickLeft={onClickLeft}
/>
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 标题文字 | string | - |
| fixed | 触发返回事件 | boolean | false |
| border | 是否显示下划线 | boolean | true |
| color | 链接文字跟图标颜色，不包括标题 | string | #6190E8 |
| leftIcon | 是否显示左侧箭头 | boolean | false |
| leftIconType | 左边图标类型，图标类型请看 SlIcon 文档 |  string | SlIconBaseProps | 'chevron-left' |
| leftText | 左边文字 | string | - |
| fixed | 触发返回事件 | boolean | false |
| border | 是否显示下划线 | boolean | true |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
|  onClickLeft  | 点击左侧按钮及文字时触发  |  - |




    /**
     * 从右到左，第一个图标类型，图标类型请看 SlIcon 文档
     */
    rightFirstIconType?: string | SlIconBaseProps
    /**
     * 从右到左第二个图标类型，图标类型请看 SlIcon 文档
     */
    rightSecondIconType?: string | SlIconBaseProps
    /**
     * 左边第一个图标类型点击事件
     */
    onClickLeft?: CommonEventFunction
    /**
     * 从右到左第一个图标类型点击事件
     */
    onClickRgIconSt?: CommonEventFunction
    /**
     * 从右到左第二个图标类型点击事件
     */
    onClickRgIconNd?: CommonEventFunction
