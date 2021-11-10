# price
按钮用于传递用户触摸时会触发的操作

## 使用指南
在 Taro 文件中引入组件
```js
import { SlPrice } from '@jd/selling-c-ui'
<View className='doc-body-content'>
  <View className='doc-body-content-tip'>基本案例</View>
  <SlPrice price="23.00" />
  <View className='doc-body-content-tip'>size</View>
  <SlPrice price="23.00" color="#000" size={ 35 } />
  <View className='doc-body-content-tip'>color</View>
  <SlPrice price="23.00" color="#000" />
  <View className='doc-body-content-tip'>原价</View>
  <SlPrice price="23.00" originalPrice="21.00" />
  <View className='doc-body-content-tip'>佣金</View>
  <SlPrice price="23.00" commissionPrice />
  <View className='doc-body-content-tip'>fixedNum</View>
  <SlPrice price="23.00" fixedNum={ 2 } />
  <View className='doc-body-content-tip'>trigger</View>
  <SlPrice price="23.00" fixedNum={ 2 } trigger={'323'} />
</View>
```

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| price | 价格 | string|string[] | - |
| originalPrice | 原价 | string | - |
| originalColor | 原价颜色 | string | - |
| color | 颜色 | string | - |
| trigger | 价格后面的内容 | React.ReactNode, | - |
| commissionPrice | 是否展示佣金 | string | - |
| fixedNum | 保留几位小数点 | number | - |
| type | 类型 | Size|string | - |
| size | 大小 | number | - |
| symbolSize | 大小 | number | - |
| priceUnit | 价格单位 | any | ¥ |
| unitSize | 价格单位大小 | number | 32 |
