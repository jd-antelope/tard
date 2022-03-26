 
# Tab 标签页
### 介绍
选项卡切换组件
### 引入
```js
import { Tab } from 'tard'
```
## 代码演示
### 基本用法

```js
const orderStatus = [{
  key: 'total',
  title: '全部'
},{
  key: '1',
  title: '待付款'
},{
  key: '2',
  title: '已付款'
}]

const OrderManage: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  return <Tab
    tabList={ orderStatus } current={ current }
    onClick={ (active) => {
      setCurrent(active)
    } }
  />
}
```

### 支持滚动

```js
const orderStatus = [{
  key: 'total',
  title: '全部'
},{
  key: '1',
  title: '待付款'
},{
  key: '2',
  title: '已付款'
},{
  key: '4',
  title: '已完成'
},{
  key: '5',
  title: '无效'
},{
  key: '6',
  title: '已结算'
}]

const OrderManage: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  return <Tab
    tabList={ orderStatus } current={ current }
    scroll={ true }
    onClick={ (active) => {
      setCurrent(active)
    } }
  />
}
```

### 文字颜色变换

```js
const orderStatus = [{
  key: 'total',
  title: '全部'
},{
  key: '1',
  title: '待付款'
},{
  key: '2',
  title: '已付款'
},{
  key: '4',
  title: '已完成'
},{
  key: '5',
  title: '无效'
},{
  key: '6',
  title: '已结算'
}]

const OrderManage: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  return <Tab
    tabList={ orderStatus } current={ current }
    scroll={ true } activeColor="#36D57D" color="#000000"
    onClick={ (active) => {
      setCurrent(active)
    } }
  />
}
```

## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| tabList | tab列表 | array | - |
| current | 当前选中的tab | number | - |
| className | 组件外部自定义类名 | string | - |
| height | tab的高度 | string | - |
| customStyle | 组件容器样式 | string | - |
| tabDirection | tab的排布方式 | string | - |
| scroll | 是否滚动 | boolean | - |
| swipeable | 是否支持手势滑动切换内容页，当tabDirection='vertical'时，无论是否设置，都不支持手势滑动切换内容页 | boolean | - |
| animated | 是否开启切换动画 | boolean | - |
| activeColor | 自定义选中标签的颜色 | string | - |
| color | 文字默认颜色 | string | - |

### Tab Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击或滑动时触发事件 | - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
| --tab-color | var(--color-text) |
| --tab-color-active | var(--color-primary) |
| --tab-font-size | var(--font-size-base) |
| --tab-line-height | 3px;
| --tab-underline-color | var(--color-grey-3) |
| --tab-bg-color | var(--color-white) |
| --tab-item-space | 60px |
| --tab-item-underline-space | var(--spacing-v-xl) |
| --tab-pane-min-height | 100px |
