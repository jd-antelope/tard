import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# Field
## 代码演示
### 引入
在 Taro 文件中引入组件
~~~js
import { SlField } from '@jd/selling-c-ui'
~~~

### 基本用法
~~~js
<SlField
  name='shopName' 
  title='商品名称' 
  type='text' 
  placeholder='单行文本' 
  value={form.shopName} 
  onChange={(e) => change({ shopName: e })} 
/>
~~~

### 必填
修改 required 属性显示必填标识 *
~~~js
<SlField
  name='shopName' 
  title='图片描述' 
  type='text' 
  placeholder='单行文本' 
  value={form.value} 
  required
  onChange={(e) => change({ imgDes: e })} 
/>
~~~

### 边框
属性 border 为 false 时就能去掉元素边框
~~~js
<SlField
  name='shopName' 
  title='商品名称' 
  border={ false }
  type='text' 
  placeholder='单行文本' 
  value={form.shopName} 
  onChange={(e) => change({ shopName: e })} 
/>
~~~

### 只读
添加属性 readonly 不能修改元素
~~~js
<SlField
  name='shopName' 
  title='图片描述' 
  type='text'
  value='信息'
  readonly
  onChange={(e) => change({ imgDes: e })} 
/>
~~~

### 内容区域文字颜色
修改属性 contentColor 可以修改中间区域文字颜色
~~~js
<SlField
  name='shopName' 
  title='图片描述' 
  value='value2'
  contentColor="red"
  onLink={ () => { } }
/>
~~~

### 自定义跳转内容
修改属性 linkSlot 可以自定义右侧跳转内容
~~~js
<SlField
  name='shopName' 
  title='图片描述' 
  value='信息'
  isLink
  linkSlot={'自定义'}
  readonly
  onChange={(e) => change({ imgDes: e })} 
/>
~~~

### 左侧文本额外类名
添加 labelClass 属性可以自定义左侧 class 名
~~~js
<SlField
  name='shopName' 
  title='图片描述' 
  value='信息'
  isLink
  linkSlot={'自定义'}
  readonly
  labelClass="label-custom"
  onChange={(e) => change({ imgDes: e })} 
/>
~~~

### 左侧文本宽度
修改属性 labelWidth 可以控制左侧宽度
~~~js
<SlField
  name='shopName' 
  title='图' 
  value='信息'
  isLink
  linkSlot={'自定义'}
  readonly
  labelWidth={ 50 }
  onChange={(e) => change({ imgDes: e })} 
/>
~~~

### 左侧文本对齐方式
修改属性 labelAlign 可以控制左侧对齐方式
~~~js
<SlField
  name='shopName' 
  title='图' 
  value='信息'
  isLink
  linkSlot={'自定义'}
  readonly
  labelAlign='right'
  onChange={(e) => change({ imgDes: e })} 
/>
~~~

### 多行输入框
当属性 type 为 textarea 时 可以切换到多行文本框
~~~js
<SlField
  name='shopName' 
  type='textarea'
  title='图片' 
  value='信息'
  placeholder="多行文本"
/>
~~~

### 无标题
属性 title 不写时可以去掉左侧内容
~~~js
<SlField
  name='shopName' 
  type='textarea'
  value='信息'
  placeholder="多行文本"
/>
~~~

## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| name | 输入框的唯一标识，有传入点击title会聚焦输入框 | string | - |
| title | 输入框左侧标题，若传入为空，则不显示标题 | string | - |
| type | 输入框类型@defalut'text' | 'text'|'number'|'password'|'phone'|'idcard'|'digit'|'textarea' | - |
| error | 是否出现错误 | boolean | false |
| clear | 是否显示清除按钮，需要传入onChange事件来改变value | boolean | false |
| border | 是否显示下划线边框 | boolean | true |
| disabled | 是否禁止输入，禁止点击按钮 | boolean | false |
| placeholder | 占位符 | string | - |
| placeholderStyle | 指定placeholder的样式，只在小程序有效 | string | - |
| placeholderClass | 指定placeholder的样式类，只在小程序有效 | string | - |
| readonly | 是否可编辑 | boolean | true |
| adjustPosition | 键盘弹起时，是否自动上推页面 | boolean | false |
| autoFocus | 是否自动聚焦 | boolean | false |
| autoHeight | 是否自动增高textarea适用 | boolean | false |
| fixed | 如果Textarea是在一个position:fixed的区域，需要显示指定属性 | boolean | false |
| focus | 是否聚焦 | boolean | false |
| required | 是否必填 | boolean | false |
| contentColor | 不可填的情况内容颜色 | String | false |
| isLink | 是否展示右侧箭头并开启点击反馈 | boolean | false |
| linkText | 是否展示右侧箭头名称 | string | false |
| linkSlot | 自定义右侧箭头信息 | React.ReactNode | false |
| labelClass | 左侧title的class | string | - |
| labelWidth | 左侧title的宽度 | number | - |
| labelAlign | 左侧title的对齐方式 | 'center'|'left'|'right' | - |
| onBlur | 输入框失去焦点时触发的事件，v2.0.3版本可以获取event参数 | InputFunction<string|number,BlurEventDetail> | - |
| onFocus | 输入框被选中时触发的事件，v2.0.3版本可以获取event参数 | InputFunction<string|number,FocusEventDetail> | - |
| onChange | 输入框值改变时触发的事件，开发者需要通过onChange事件来更新value值变化，onChange函数必填。小程序中，如果想改变value的值，需要returnvalue从而改变输入框的当前值,v2.0.3版本可以获取event参数 | InputFunction<string|number,InputEventDetail,any> | - |
| onConfirm | 点击完成按钮时触发，v2.0.3版本可以获取event参数 | InputFunction<string|number,ConfirmEventDetail> | - |
| onClick | 当editable为false时，点击组件触发的事件，v2.3.3版本可以获取event参数 | (event? | - |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件 | (event? | - |
| onErrorClick | 点击错误按钮触发的事件，v2.3.3版本可以获取event参数 | (event? | - |
| onLink | 点击右侧箭头 | ()=>void | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}