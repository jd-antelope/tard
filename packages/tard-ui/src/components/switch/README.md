# Tab 开关
### 介绍
开关组件
### 引入
```js
import { SlSwitch } from 'tard'
```
## 代码演示
### 基本用法

```js
const [value, setValue]=useState<boolean>(true);

<SlSwitch checked={value}
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```

### 自定义标题
修改属性 `title` 可以自定义元素标题
```js
<SlSwitch title='开启中' checked={true} />

```
### 定制选中颜色
修改属性 `activeColor` 可以控制选中元素颜色
```js
<SlSwitch checked={value} activeColor="#F03511"
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```
### 定制背景颜色
修改属性 `bgColor` 可以控制整体元素背景色
```js
<SlSwitch checked={!value} bgColor="#333"
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```
        
### 定制宽度
设置属性 `bgWidth` 可以控制整体宽度
```js
<SlSwitch checked={value} bgWidth={200}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
### 定制按钮大小

```js
<SlSwitch checked={value} bgWidth={200} btnSize={60}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
### 定制背景高度

```js
<SlSwitch checked={value} bgWidth={200} btnSize={60} bgHeight={50}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
### 定制背景圆角

```js
<SlSwitch checked={value} bgWidth={200} btnSize={60} radius={50} bgHeight={50}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```

