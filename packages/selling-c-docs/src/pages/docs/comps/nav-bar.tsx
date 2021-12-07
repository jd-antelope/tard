import MarkDown from '@/components/markdown'

const markdown = `
# NavBar 头部导航
### 介绍
为页面提供导航功能，常用于页面顶部。
### 引入
~~~js
import { SlNavBar } from 'tard'
~~~
## 代码演示
### 基本用法
通过 ~title~ 属性设置头部导航标题
~~~js
<SlNavBar title="标题" />
~~~

### 返回上一级
在头部导航实现返回上级功能，设置 ~leftIcon~ 属性显示左侧箭头，通过 ~leftText~ 属性来设置左边文字
~~~js
const onClickLeft = () => {
    // todo改为Toast
    console.log('back')
}

<SlNavBar title="标题" leftIcon leftText='返回' onClickLeft={onClickLeft} />
~~~

### 自定义左侧图标
设置 ~leftIconType~ 属性来设置左边图标
~~~js
<SlNavBar title="标题"
    leftIcon
    leftText='返回'
    leftIconType='arrow-left'
    onClickLeft={onClickLeft}
/>
~~~

### 自定义左侧图标
设置 ~leftIconType~ 属性来设置左侧图标， ~onClickLeft~ 设置左侧点击事件
~~~js
<SlNavBar title="标题"
    leftIcon
    leftText='返回'
    leftIconType='arrow-left'
    onClickLeft={onClickLeft}
/>
~~~

### 自定义链接颜色
设置 ~color~ 属性来设置链接颜色
~~~js
<SlNavBar title="标题"
    leftIcon
    leftText='返回'
    leftIconType='arrow-left'
    onClickLeft={onClickLeft}
/>
~~~
### 自定义右侧图标
设置 ~rightIconType~ 属性来设置右侧图标， ~onClickRight~ 设置左侧点击事件
~~~js
<SlNavBar title="标题"
    leftIcon
    leftText='返回'
    rightIconType='search'
    onClickLeft={onClickLeft}
    onClickRight={onClickRight}
/>
~~~

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
| rightIconType | 右边图标类型，图标类型请看 SlIcon 文档 |  string | SlIconBaseProps | - |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
|  onClickLeft  | 点击左侧按钮及文字时触发  |  - |
|  onClickRight  | 点击右侧按钮及文字时触发  |  - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @slc-nav-bar-title-color | @color-text-base |
|  @slc-nav-bar-link-color  | @color-text-base |
|  @slc-nav-bar-spacing-v | 9PX |
|  @slc-nav-bar-spacing-h  | 5PX |
|  @slc-nav-bar-font-size | 16PX|
|  @slc-nav-bar-back-font-size | 14PX |
|  @slc-nav-bar-height | 92px |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}