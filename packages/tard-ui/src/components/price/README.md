# Price 价格
### 介绍
该组件封装了业务中常用的价格用法
### 引入
```js
import { SlPrice } from 'tard'
```
## 代码演示
### 基础用法
```js
<SlPrice price="88.00" />
```

### 保留有效小数点
修改 `fixedNum` 属性保留小数点几位，支持 1-100 的整数
```js
<SlPrice price="23.00" fixedNum={ 2 } />
```
### 价格传入数组
`price` 价格区间
```js
<SlPrice price={ ['88.00', '99.00', '188.00'] } fixedNum={ 2 } />
```

### 自定义颜色
修改 `color` 属性修改颜色
```js
<SlPrice className='doc-body-content__pr' price="88.00" color="#FF2929" />
<SlPrice className='doc-body-content__pr' price="88.00" color="#496FF2" />
```

### 划线价
添加 `originalPrice` 属性可以展示原价
```js
<SlPrice price="88.00" originalPrice="188.00" fixedNum={ 2 } />
```

### 自定义价格前内容
修改 `beforeContent` 属性，配置价格后面的内容
```js
<SlPrice price="88.00" beforeContent={ <View>优惠价</View> } />
```

### 自定义价格后内容
修改 `afterContent` 属性，配置价格后面的内容
```js
<SlPrice price="88.00" afterContent={ <View>优惠价</View> } />
```

### 修改单位
修改 `priceUnit` 属性，可以修改价格的单位
```js
<SlPrice price="88.00" priceUnit="$" />
```

### 千分号形式显示
增加 `thousands` 属性，按照千分号形式显示
```js
<SlPrice price="883888888.00" thousands />
```

### 单位价格大小对比
修改 `type` 属性，可以修改价格类型，目前有五种类型供大家选择
```js
<SlPrice className='doc-body-content__pr' price="88.00" type="small" />
<SlPrice className='doc-body-content__pr' price="88.00" type="smallMiddle" />
<SlPrice className='doc-body-content__pr' price="88.00" type="middle" />
<SlPrice className='doc-body-content__pr' price="88.00" type="largeMiddle" />
<SlPrice className='doc-body-content__pr' price="88.00" type="large" />
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| price | 价格 | string或者string[] | - |
| originalPrice | 原价 | string | - |
| originalColor | 原价颜色 | string | - |
| color | 颜色 | string | - |
| beforeContent | 自定义价格前内容 | React.ReactNode | - |
| afterContent | 自定义价格后内容 | React.ReactNode | - |
| commissionPrice | 是否展示佣金 | string | - |
| fixedNum | 保留几位小数点 | number | - |
| type | 类型 | Size | middle |
| size | 整体价格大小 | number | 36 |
| symbolSize | 只修改价格大小 | number | 24 |
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

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @price-line-px | 12px |
