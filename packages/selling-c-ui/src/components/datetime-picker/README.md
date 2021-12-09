
# DatetimePicker 日期选择
### 介绍
选择时间的控件，将日期和分秒封装了一起。目前支持小程序，h5暂不支持
### 引入
在 Taro 文件中引入组件
```js
import { SlDatetimePicker } from 'tard'
```
## 代码演示
### 基础用法
默认日期选择器
```js
<SlDatetimePicker 
  visible
  onClose={ () => {} }
/>
```

### 默认时间
修改属性`value`可以修改默认值
```js
<SlDatetimePicker 
  visible
  value='2020-09-09'
  onClose={ () => {} }
/>
```

### 时间选择器
属性 `type=time` 时换成时间选择器
```js
<SlDatetimePicker 
  type="time" 
  visible
  onClose={ () => {} } 
/>
```

### 显示结束时间
属性 `showEndDate` 显示结束时间
```js
<SlDatetimePicker 
  showEndDate
  visible
  onClose={ () => {} } 
/>
```

### 修改头部名称
修改属性 `title` 时可修改开始选择器头部名称
```js
<SlDatetimePicker 
  title="开始" 
  visible
  onClose={ () => {} } 
/>
```

### 点击遮罩层不关闭
修改属性 `closeOnclickOverlay` 为 `false` 时点击遮罩层不关闭
```js
<SlDatetimePicker 
  closeOnclickOverlay={ false }
  visible
  onClose={ () => {} } 
/>
```

### 设置最小值和最大值
修改属性 `minDate` 时可修改选择器最小值；修改属性 `maxDate` 时可修改选择器最大值；
```js
<SlDatetimePicker 
  visible
  minDate="2000-01-01"
  maxDate="2010-01-01"
  onClose={ () => {} } 
/>
```

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

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClose | 关闭回调 | - |
| onOk | 确认回调 | array['1990-1-1','2021-1-1'] |
