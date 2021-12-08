import MarkDown from '@/components/markdown'

<<<<<<< Updated upstream
const markdown = `# Empty 空状态
### 介绍
该组件封装了日常业务中常见的空数据的展示效果
=======
const markdown = `# Empty
### 介绍
该组件封装了日常业务中常见的空数据的展示效果

>>>>>>> Stashed changes
### 引入
~~~js
import { SlEmpty } from '@jd/selling-c-ui'
~~~
## 使用指南
### 基础用法
最简单的使用是通过src设置一张默认显示图片即可
~~~js
  <SlEmpty src="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/hsresult/no-wifi.png" />
~~~
### 图文混排效果
通过指定src 与 text 实现图文混排的效果
~~~js
<SlEmpty
 text="网络错误"
 src="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/hsresult/no-wifi.png" />
~~~

### 支持用户反馈操作
可通过 btnText 属性展示默认按钮，支持用户交互操作
~~~js
<SlEmpty
text="网络错误"
src="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/hsresult/no-wifi.png"
btnText="重试"
        />
~~~
### 颜色
修改 color 属性修改颜色
~~~js
<SlPrice price="23.00" color="#000" size={ 35 } />
~~~

### 修改类型
修改 type 属性，可以修改价格类型，目前有五种类型供大家选择
~~~js
<SlPrice price="23.00" type="largeMiddle" />
~~~

### 原价内容
添加 originalPrice 属性可以展示原价
~~~js
<SlPrice price="23.00" originalPrice="21.00" />
~~~

### 修改单位
修改 priceUnit 属性，可以修改价格的单位
~~~js
<SlPrice price="23.00" priceUnit="$" />
~~~

### 保留几位小数点
修改 fixedNum 属性保留小数点几位，支持 1-100 的整数
~~~js
<SlPrice price="23.00" fixedNum={ 2 } />
~~~

### 自定义价格后面内容
修改 content 属性，配置价格后面的内容
~~~js
<SlPrice price="23.00" content={ <View>商羚</View> } />
~~~
### 千分号形式显示
增加 thousands 属性，按照千分号形式显示
~~~js
<SlPrice price="233232323.00" thousands />
~~~

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
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}