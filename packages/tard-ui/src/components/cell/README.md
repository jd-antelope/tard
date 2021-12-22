# Cell 单元格
### 介绍
单元格为列表中的单个展示项
### 引入
```js
import { SlCell } from 'tard'
```
## 代码演示
### 基础用法
`SlCell` 可以单独使用，也可以与 `SlCellGroup` 搭配使用
```js
<SlCell title="单元格" value="相关内容" />
<SlCell title="单元格" value="相关内容" label="描述信息" />
```
### 卡片用法
通过 `SlCellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格
```js
<SlCellGroup inset>
    <SlCell title="单元格" value="相关内容" />
    <SlCell title="单元格" value="相关内容" label="描述信息" />
</SlCellGroup>
```

### 展示图标
通过 `icon` 属性在标题左侧展示图标
```js
<SlCell title="单元格" value="相关内容" icon="user" border={false} />
```
### 只设置value
只设置 `value` 时，内容会靠左对齐
```js
<SlCell value="单元格" />
```

### 展示箭头
设置 `isLink` 属性后会在单元格右侧显示箭头，并且可以通过 `arrowDirection` 属性控制箭头方向
```js
<SlCell title="单元格" isLink />
<SlCell title="单元格" value="相关内容" isLink />
<SlCell title="单元格" value="相关内容" isLink arrowDirection="down" />
```
### 页面导航
```js
<SlCell title="URL 跳转" isLink />
<SlCell title="路由跳转" isLink />
```
### 分组
通过 `SlCellGroup` 的 `title` 属性可以指定分组标题
```js
<SlCellGroup title="分组一">
    <SlCell title="单元格" value="相关内容" />
</SlCellGroup>
<SlCellGroup title="分组二">
    <SlCell title="单元格" value="相关内容" />
    <SlCell title="单元格" value="相关内容" />
</SlCellGroup>
```
### 垂直居中
通过 `center` 属性可以让 `SlCell` 的左右内容都垂直居中
```js
<SlCell title="单元格" center value="相关内容" label="描述信息" border={false} />
```

### 使用插槽
如以上用法不能满足你的需求，可以使用插槽 `leftContent`、`rightContent` 来自定义内容
```js
<SlCell value="相关内容" leftContent={<View>单元格<SlButton size='mini'>标签</SlButton></View>} />
<SlCell title="单元格" rightContent={<View><SlSwitch checked={true} /></View>} />
```
        
## API
### SlCellGroup Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 分组标题 | number｜string | - |
| inset | 是否卡片风格 | boolean | - |
| border | 是否显示内边框 | boolean | - |

### SlCell Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 左侧标题 | number｜string | - |
| value | 右侧内容 | number｜string | - |
| label | 标题下方的描述信息 | number｜string | - |
| isLink | 是否展示右侧箭头并开启点击反馈 | boolean | - |
| border | 是否显示内边框 | boolean | - |
| icon | 左侧图标 | string | - |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | 'left' ｜ 'up' ｜ 'down' ｜ 'right' | `right` |
| leftContent | 自定义单元格左侧内容 | React.ReactNode | - |
| rightContent | 自定义单元格右侧内容 | React.ReactNode | - |
| border | 是否显示内边框 | boolean | true |
| center | 是否使内容垂直居中 | boolean | false |

### Cell Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击单元格时触发 | - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @cell-horizontal-padding| 36px |
|  @cell-vertical-padding | 24px |
|  @cell-group-title-padding  | @cell-vertical-padding @cell-horizontal-padding |