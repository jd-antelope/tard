
# DatetimePicker
选择时间的控件，将日期和分秒封装了一起。目前支持小程序，h5暂不支持

## 代码演示
### 引入
在 Taro 文件中引入组件
```js
import { SlDatetimePicker } from '@jd/selling-c-ui'
```

### 基础用法
默认日期选择器
```js
import React from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlDatetimePicker } from '@test/selling-c-ui'

const DatetimePicker: FC = () => {
  return (
    <View className="container">
      <SlDatetimePicker 
        visible
        onClose={ () => onClose={ () => {} }
      />
    </View>
  );
};
```

### 时间选择器
属性 type=time 时换成时间选择器
```js
<SlDatetimePicker 
  type="time" 
  visible
  onClose={ () => {} } 
/>
```

### 修改头部名称
修改属性 title 时可修改开始选择器头部名称
```js
<SlDatetimePicker 
  title="开始" 
  visible
  onClose={ () => {} } 
/>
```

### 修改默认值
修改属性 value 时可修改默认开始时间。支持时间戳、字符串、时间类型。
```js
<SlDatetimePicker 
  value="1990-01-01" 
  visible
  onClose={ () => {} } 
/>
```

### 设置最小值和最大值
修改属性 minDate 时可修改选择器最小值；修改属性 maxDate 时可修改选择器最大值；
```js
<SlDatetimePicker 
  visible
  minDate="2000-01-01"
  maxDate="2010-01-01"
  onClose={ () => {} } 
/>
```

## Api
### props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| showEndDate | 是否显示结束时间 | boolean | false |
| visible | 打开弹窗 | boolean | false |
| outClose | 遮罩层关闭 | boolean | false |
| title | 左侧时间的title | string | 选中时间 |
| endTitle | 右侧的时间title | string | 结束时间 |
| value | 默认开始时间 | string | 9999-1-1 |
| endValue | 默认结束时间 | string | 9999-1-1 |
| onClose | 关闭回调 | CommonEventFunction | - |
| onOk | 确认回调(返回是array['1990-1-1','2021-1-1']) | CommonEventFunction | - |
