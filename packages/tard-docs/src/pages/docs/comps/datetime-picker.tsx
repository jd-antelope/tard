import MarkDown from '@/components/markdown'

const markdown = `
# DatetimePicker 日期选择
### 介绍
选择时间的控件，将日期和分秒封装了一起。目前支持小程序，h5暂不支持
### 引入
在 Taro 文件中引入组件
~~~js
import { SlDatetimePicker } from 'tard'
~~~
## 代码演示
### 选择日期
~~~js
<SlDatetimePicker 
  visible
  onClose={ () => {} }
/>
~~~

### 选择时间
属性 ~type=time~ 时换成时间选择器
~~~js
<SlDatetimePicker 
  visible
  value='2020-09-09'
  type='time'
  onClose={ () => {} }
/>
~~~

### 选择日期时间
属性 ~type=datetime~ 时换成日期时间选择器
~~~js
<SlDatetimePicker  
  visible
  value='2020-09-09 10:20'
  type='time'
  onClose={ () => {} } 
/>
~~~

### 选择开始-结束时间
属性 ~showEndDate~ 显示结束时间
~~~js
<SlDatetimePicker 
  showEndDate
  visible
  onClose={ () => {} } 
/>
~~~

### 自定义内容
修改属性 ~title、endTitle~ 时可修改开始选择器头部名称
~~~js
<SlDatetimePicker 
  title="自定义开始"
  endTitle="自定义结束" 
  visible
  onClose={ () => {} } 
/>
~~~

### 倒角用法
添加属性 ~round~ 增加头部倒角
~~~js
<SlDatetimePicker 
  round
  visible
  onClose={ () => {} } 
/>
~~~

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| showEndDate | 是否显示结束时间 | boolean | false |
| visible | 打开弹窗 | boolean | false |
| closeOnclickOverlay | 是否能点击遮罩层关闭 | boolean | false |
| title | 开始时间title | string | 开始时间 |
| endTitle | 结束时间title | string | 结束时间 |
| value | 默认开始时间 | string | new Date() |
| type | 是否展示时间 | 'date'｜'time' | 'date' |
| minDate | 最小时间 | string | 1990-01-01 |
| maxDate | 最大时间 | string | - |
| round | 是否倒角 | boolean | false |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClose | 关闭回调 | - |
| onOk | 确认回调 | array['1990-1-1','2021-1-1'] |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}