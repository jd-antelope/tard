# ConfigProvider 全局配置
### 介绍
用于配置 Tard 组件的主题样式，从 X.X 版本开始支持
### 引入
```js
import { ConfigProvider } from 'tard'
```

## 定制主题
Tard 组件通过丰富的 `CSS 变量` 来组织样式，通过覆盖这些 `CSS 变量`，可以实现定制主题、动态切换主题等效果

## 代码演示
### 基础用法
```js
const [value1, setValue1] = useState(0)
const [value2, setValue2] = useState('a')

const option1 = [
  { text: '全部订单', value: 0 },
  { text: '订单类型1', value: 1 },
  { text: '订单类型2', value: 2 },
]

const option2 = [
  { text: '全部商品', value: 'a' },
  { text: '商品类型1', value: 'b' },
  { text: '商品类型2', value: 'c' },
]

<DropdownMenu>
  <DropdownMenu.Item 
    value={value1} 
    options={option1} 
    onChange={(value) => {setValue1(value)}} 
    />
  <DropdownMenu.Item 
    value={value2} 
    title="商品类型" 
    options={option2} 
    onChange={(value) => {setValue2(value)}} 
    />
</DropdownMenu>
```
### 自定义标题
通过 `title` 属性可以自定义标题
```js
<DropdownMenu>
  <DropdownMenu.Item 
    title="订单类型" 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <DropdownMenu.Item 
    title="商品类型" 
    value={value2} 
    options={option2} 
    onChange={(value) => { setValue2(value) }} 
    />
</DropdownMenu>
```
### 自定义菜单内容
通过 `content` 属性可以自定义菜单内容
```js
<DropdownMenu>
  <DropdownMenu.Item 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <DropdownMenu.Item 
    title="筛选" 
    content={(<View>自定义菜单内容</View>)} 
    />
</DropdownMenu>
```

### 自定义菜单标题颜色
通过 `activeColor` 属性可以自定义菜单标题和选项的选中态颜色
```js
<DropdownMenu activeColor="blue">
  <DropdownMenu.Item 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <DropdownMenu.Item 
    value={value2} 
    options={option2} 
    onChange={(value) => { setValue2(value) }} 
    />
</DropdownMenu>
```

### 自定义标题对齐方式
```js
<DropdownMenu titleAlign="left">
  <DropdownMenu.Item 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <DropdownMenu.Item 
    value={value2} 
    options={option2} 
    onChange={(value) => { setValue2(value) }} 
    />
</DropdownMenu>
```
### 自定义点击事件
通过 `onClick` 属性可以自定义点击事件
```js
<DropdownMenu>
  <DropdownMenu.Item 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <DropdownMenu.Item 
    title="自定义点击事件" 
    onClick={() => { alert('自定义点击事件') }} 
    />
</DropdownMenu>
```
## API
### DropdownMenu Props
| 参数        | 说明                       | 类型                          | 默认值   |
| ----------- | -------------------------- | ----------------------------- | -------- |
| activeColor | 菜单标题和选项的选中态颜色 | string                        | 主题色   |
| titleAlign  | 菜单标题对齐方式           | 'center' ｜ 'right' ｜ 'left' | 'center' |

### DropdownItem Props
| 参数    | 说明                   | 类型           | 默认值         |
| ------- | ---------------------- | -------------- | -------------- |
| value   | 当前选中项对应的 value | number｜string | 主题色         |
| title   | 菜单项标题             | string         | 当前选中项文字 |
| options | 选项数组               | Option[]       | []             |
| content | 自定义内容             | 元素           | -              |

### DropdownItem Events
| 事件名  | 说明                          | 回调参数 |
| ------- | ----------------------------- | -------- |
| change  | 点击选项导致 value 变化时触发 | value    |
| onClick | 自定义点击事件                | -        |

### Option 数据结构
| 键名  | 说明   | 类型   |
| ----- | ------ | ------ |
| text  | 文字   | string |
| value | 标识符 | number | string |

### 样式变量
| 名称                                    | 默认值                  | 描述 |
| --------------------------------------- | ----------------------- | ---- |
| --dropdown-menu-background-color        | var(--color-white)      | -    |
| --dropdown-menu-title-font-size         | var(--font-size-base)   | -    |
| --dropdown-menu-title-text-color        | var(--color-text)       | -    |
| --dropdown-menu-height                  | 80px                    | -    |
| --dropdown-menu-box-shadow              | 0 2px 12px #EBEDF0      | -    |
| --dropdown-item-z-index                 | 10                      | -    |
| --dropdown-item-border-radius           | 16px                    | -    |
| --dropdown-menu-active-background-color | #F4F6FA                 | -    |
| --dropdown-overlay-bg-color             | var(--overlay-bg-color) | -    |
| --dropdown-overlay-z-index              | 99                      | -    |
