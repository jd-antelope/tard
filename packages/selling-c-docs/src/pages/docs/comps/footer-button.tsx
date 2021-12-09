import MarkDown from '@/components/markdown'

const markdown = `
# Footerbutton 底部按钮

### 介绍
该组件封装了常用底部按钮常用功能
### 引入
~~~js
import { SlFooterButton } from 'tard'
~~~
## 使用指南
### 基本使用
~~~js
<SlFooterButton name="按钮1"/>
~~~
### 使用双按钮
通过设置 doubleBtn 属性使用双按钮,使用双按钮时默认第一个按钮在右边
~~~js
<SlFooterButton name="按钮2" secondName='按钮1' doubleBtn/>
~~~
### 自定义按钮样式
通过设置 doubleBtn 属性使用双按钮,使用双按钮时默认第一个按钮在右边
~~~js
<SlFooterButton 
name="按钮2" 
background='#cf6d6d' 
secBackground='#c1b0b0' 
secondName='按钮1' doubleBtn
radius={20}
padding='10'
/>
~~~
### 自定义组件内边距
通过设置 padding属性设置组件的内边距支持多个属性联写，预发同CSS预发
~~~js
<SlFooterButton
name="按钮2"
secondName='按钮1'
doubleBtn={true}
radius={20}
padding={'10 15 20 25'} />
	
~~~
### 自定义组件内双Button间距
通过设置 margin属性设置两个Button之间的距离
~~~js
<SlFooterButton
className='pos-4'
name="按钮2"
secondName='按钮1'
doubleBtn={true}
radius={20}
padding='10'
margin={20} />
~~~
### 开启底部定位模式
通过设置 isFixed 开启底部定位
~~~js
<View className='doc-body-content-tip'></View>
<SlFooterButton 
name="底部定位"
background='#cf6d6d'
isFixed={true}
radius={20}
padding='20'
margin={20} />
~~~


## ApI
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| name | 按钮名字 | string | 按钮 |
| content | 自定义按钮内容 | React.ReactNode | - |
| color | 按钮颜色 | string | - |
| background | 填充颜色 | string | - |
| padding | 外边框的padding | string | 20 |
| margin | 双button时用来设置两个Button之间的距离 | number | 0 |
| radius | 按钮radius | string | 0 |
| isFixed | 是否使用底部定位模式 | boolean | false |
| lineHeight | 按钮高度 | string | 40px |
| doubleBtn | 是否为双按钮 | boolean | false |
| secondName | 第二个按钮文字 | string | 取消 |
| secColor | 第二个按钮按钮颜色 | string | - |
| secBackground | 第二个按钮填充颜色 | string | - |

### Events
|  事件名   | 说明  | 回调参数 | 
|  ----  | ----  | ---- | 
| onClick | 点击事件 | - |
| secClick | 第二个按钮点击事件 | - |





`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}