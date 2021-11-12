# tab
开关组件

## 使用指南
在 Taro 文件中引入组件
```js
import { SlSwitch } from '@jd/selling-c-ui'
```
## 基本用法

```js
const [value, setValue]=useState<boolean>(true);

<SlSwitch checked={value}
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```

## 基本用法

```js
<SlSwitch title='开启中' checked={true} />

```
## 定制选中颜色

```js
<SlSwitch checked={value} activeColor="#F03511"
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```
## 定制背景颜色

```js
<SlSwitch checked={!value} bgColor="#333"
  onChange={(v)=>{
    setValue(v);
  }} 
/>

```
        
## 定制宽度

```js
<SlSwitch checked={value} bgWidth={200}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
## 定制按钮大小

```js
<SlSwitch checked={value} bgWidth={200} btnSize={60}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
## 定制背景高度

```js
<SlSwitch checked={value} bgWidth={200} btnSize={60} bgHeight={50}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```
## 定制背景圆角

```js
<SlSwitch checked={value} bgWidth={200} btnSize={60} radius={50} bgHeight={50}
  onChange={(v)=>{
    setValue(v);
  }} 
/>
```

