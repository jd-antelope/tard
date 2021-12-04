import MarkDown from '@/components/markdown'

const markdown = `
# Footerbutton
该组件封装了常用底部按钮常用功能
## 使用指南
在taro文件中引入
~~~javascript
import { SlFooterButton } from '@test/selling-c-ui'
~~~
### 基本使用
~~~javascript
   <SlFooterButton className='pos-1' name="按钮1"/>
~~~
### 使用双按钮
通过设置 doubleBtn 属性使用双按钮,使用双按钮时默认第一个按钮在右边
~~~javascript
  <SlFooterButton  className='pos-2' name="按钮2" secondName='按钮1' doubleBtn/>
~~~
### 自定义按钮样式
通过设置 doubleBtn 属性使用双按钮,使用双按钮时默认第一个按钮在右边
~~~javascript
   <SlFooterButton 
	 className='pos-5'
	 name="按钮2" 
	 background='#cf6d6d' 
	 secBackground='#c1b0b0' 
	 secondName='按钮1' doubleBtn
	 radius={20}
	 padding='10'
	 margin={20}/>
~~~
### 自定义组件内边距
通过设置 padding属性设置组件的内边距支持多个属性联写，预发同CSS预发
~~~javascript
    <SlFooterButton
          className='pos-3'
          name="按钮2"
          secondName='按钮1'
          doubleBtn
          radius={20}
          padding={'10 15 20 25'} />
	
~~~
### 自定义组件内双Button间距
通过设置 margin属性设置两个Button之间的距离
~~~javascript
     <SlFooterButton
          className='pos-4'
          name="按钮2"
          secondName='按钮1'
          doubleBtn
          radius={20}
          padding='10'
          margin={20} />
	
~~~




## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| name | 按钮名字 | string | 按钮 |
| onClick | 点击事件 | CommonEventFunction | - |
| replaceContent | 自定义按钮内容 | React.ReactNode | - |
| color | 按钮颜色 | string | - |
| background | 填充颜色 | string | - |
| padding | 外边框的padding | string | 20 |
| margin | 双button时用来设置两个Button之间的距离 | number | 0 |
| radius | 按钮radius | string | 0 |
| lineHeight | 按钮高度 | string | 40px |
| doubleBtn | 是否为双按钮 | boolean | false |
| secondName | 第二个按钮文字 | string | 取消 |
| secColor | 第二个按钮按钮颜色 | string | - |
| secBackground | 第二个按钮填充颜色 | string | - |
| secClick | 第二个按钮点击事件 | CommonEventFunction | - |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}