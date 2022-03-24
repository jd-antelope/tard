# Switch 开关
### 介绍
开关组件
### 引入
```js
import { Switch } from 'tard'
```
## 代码演示
### 基本用法

```js
const [value, setValue]=useState<boolean>(true);

<Switch checked={value}
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```

### 自定义标题
修改属性 `title` 可以自定义元素标题
```js
<Switch title='开启中' checked={true} />

```
### 定制选中颜色
修改属性 `activeColor` 可以控制选中元素颜色
```js
<Switch checked={value} activeColor="#F03511"
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```
### 定制背景颜色
修改属性 `bgColor` 可以控制整体元素背景色
```js
<Switch checked={!value} bgColor="#333"
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```
        
### 定制宽度
设置属性 `bgWidth` 可以控制整体宽度
```js
<Switch checked={value} bgWidth={200}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
### 定制按钮大小

```js
<Switch checked={value} bgWidth={200} btnSize={60}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
### 定制背景高度

```js
<Switch checked={value} bgWidth={200} btnSize={60} bgHeight={50}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
### 定制背景圆角

```js
<Switch checked={value} bgWidth={200} btnSize={60} radius={50} bgHeight={50}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```

## API
### Props
| 属性         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| title        | 标签名     | string | -        |
| bgColor      | 背景颜色     | string | -      |
| activeColor  | 背景选中颜色     | string | -   |
| btnColor     | 按钮颜色     | string | -      |
| bgHeight     | 背景高度     | number | 32     |
| bgWidth      | 背景宽度     | number | 90     |
| btnSize      | 背景高度     | number | 44     |
| checked      | 是否显示开启  | boolean | false |
| disabled     | 是否禁止点击  | boolean | false |
| radius       | border-radius的大小  | number | 19 |

### Switch Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onChange | 输入框值改变时触发的事件 | - |

### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
| --switch-title-color |  var(--color-grey-0) |
| --switch-bg-color |  #F2F2F2 |
| --switch-btn-color |  var(--color-white) |
| --switch-box-shadow |  0 4px 12px 0 rgba(0, 0, 0, 0.1) |
