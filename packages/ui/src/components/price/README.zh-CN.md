# Price 价格
### 介绍
该组件封装了业务中常用的价格用法，默认保留有效小数点2位，小数点后几位0直接抹去
### 引入
```js
import { Price } from 'tard'
```
## 代码演示
### 基础用法
```js
<Price price="88.00" />
```

### 小数位位数
修改 `fixedNum` 属性保留小数点几位，支持 1-100 的整数
```js
<Price price="88.00" fixedNum={ 0 } />
<Price price="88.80" fixedNum={ 1 } />
<Price price="88.88" fixedNum={ 2 } />
```
### 价格区间
`price` 价格区间, 增加属性 `showAfterSymbol` 展示后面单位
```js
<Price price={ ['88.00', '99.00', '188.00'] } fixedNum={ 2 } />
<Price price={ ['88.00', '99.00', '188.00'] } fixedNum={ 2 } showAfterSymbol />
```

### 自定义颜色
修改 `color` 属性修改颜色
```js
<Price price="88.00" color="green" />
<Price price="88.00" color="#496FF2" />
```

### 划线价
添加 `originalPrice` 属性可以展示原价
```js
<Price price="88.00" originPrice="188.00" fixedNum={ 2 } />
```

### 自定义价格前内容
修改 `beforeContent` 属性，配置价格后面的内容
```js
<Price price="88.00" beforeContent={ <View>优惠价</View> } />
```

### 自定义价格后内容
修改 `afterContent` 属性，配置价格后面的内容
```js
<Price price="88.00" afterContent={ <View>优惠价</View> } />
```

### 修改单位
修改 `priceUnit` 属性，可以修改价格的单位
```js
<Price price="88.00" priceUnit="$" />
```

### 千分号形式显示
增加 `thousands` 属性，按照千分号形式显示
```js
<Price price="883888888.00" thousands />
```

### 单位价格大小对比
修改 `type` 属性，可以修改价格类型，目前有五种类型供大家选择
```js
<Price price="88.00" type="small" />
<Price price="88.00" type="smallMiddle" />
<Price price="88.00" type="middle" />
<Price price="88.00" type="largeMiddle" />
<Price price="88.00" type="large" />
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| price | 价格 | string ｜ string[] | - |
| originPrice | 划线价 | string | - |
| originColor | 划线价颜色 | string | - |
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
| showAfterSymbol | 价格为数组时是否展示后面单位 | boolean | false |

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
|  --price-height | 50px |
|  --price-commission-height | 30px |
|  --price-line-horizontal-padding | var(--spacing-v-sm) |
|  --price-font-size-lg | 60px |
|  --price-font-size-ml | 48px |

