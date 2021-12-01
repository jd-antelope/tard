import MarkDown from '@/components/markdown'

const markdown = `# Price
该组件封装了业务中常用的价格用法

## 使用指南
在 Taro 文件中引入组件
~~~js
import { SlPrice } from '@jd/selling-c-ui'
~~~

### 基础用法
~~~js
<SlPrice price="23.00" />
~~~
### 价格传入数组
price 可以传入数组
~~~js
<SlPrice price={ ['6.00', '7.00', '23.00'] } />
~~~

### 大小
修改 size 属性改变大小，基于750的尺寸
~~~js
<SlPrice price="23.00" size={ 35 } />
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
| price | 价格 | string或者string[] | - |
| originalPrice | 原价 | string | - |
| originalColor | 原价颜色 | string | - |
| color | 颜色 | string | - |
| content | 价格后面的内容 | React.ReactNode | - |
| commissionPrice | 是否展示佣金 | string | - |
| fixedNum | 保留几位小数点 | number | - |
| type | 类型 | Size | - |
| size | 整体价格大小 | number | - |
| symbolSize | 只修改价格大小 | number | - |
| priceUnit | 价格单位 | string | ¥ |
| unitSize | 价格单位大小 | number | 32 |
| thousands | 是否按照千分号形式显示 | boolean | false |

### Size 数据结构
|  键名   | 单位和价格大小  |
|  ----  | ----  |
| small | 24 + 24 |
| smallMiddle | 28 + 28 |
| middle | 24 + 36 |
| largeMiddle | 28 + 48 |
| large | 36 + 60 |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}