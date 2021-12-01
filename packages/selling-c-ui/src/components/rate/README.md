# Rate
### 介绍
评分组件，可自定义评分星星图标的大小、间隔、评分数
### 引入
~~~js
import { SlRate } from '@jd/selling-c-ui'
~~~
## 代码演示
### 基础用法
直接引入组件即可，默认有五个元素
~~~js
<SlRate/>
~~~

### 设置选中元素个数
通过设置 value属性的值可以更改选中元素的个数，支持0.5
~~~js
<SlRate value={3}/>
<SlRate value={3.5}/>
~~~
### 设置元素总个数
通过设置max属性的值可以更改选中元素的总个数
~~~js
<SlRate value={3} max={6}/>
~~~

### 设置元素之间的间隔
通过设置margin属性的值可以更改元素之间的间隔
~~~js
 <SlRate value={3} max={5} margin={20} />
~~~

### 设置元素之间的间隔
通过设置activeColor属性的值可以更改选中元素的颜色
~~~js
 <SlRate value={3} max={5} activeColor='pink' />
~~~


### 设置元素的大小
通过设置size属性的值可以更改选中元素的颜色
~~~js
 <SlRate value={3} max={5} size={20} />
~~~

### 动态选取元素
通过指定onchange时间实时改变选中元素的个数
~~~js
  const [value, setValue] = useState(3)
  const chage = (v) => {
    setValue(v)
  }
   <SlRate value={value} max={5} onChange={(value) => chage(value)} />
~~~




## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| value | 当前评分,需要通过 onChange 事件来更新 value 值，必填 | Number | 0 |
| max | 元素的最大个数 | Number | 5 |
| size | 元素尺寸大小(单位:px) | string | - |
| margin | 元素间隔(单位:px) | Number / String	 | 20 |
| activeColor | 选中元素的颜色 | string | '#ffca3e' |

### 事件
|  事件名称   | 说明  | 返回参数 |
|  ----      | ---- |   ----  |
|  onChange  | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读  | 当前值 value |

### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
| @slc-rate-icon-size | 20px |
| @slc-rate-star-color | @color-rate-base |
| @slc-rate-star-color-on | @color-rate-on |