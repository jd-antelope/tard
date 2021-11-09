# field
## 代码演示
### 基本用法
```js
import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Form: FC = () => {
  const [form, setForm] = useState<any>({
    value: ''
  })

  const onSubmit = (event) => {
    console.log(event)
  }

  const change = (res) => {
    setForm({
      ...form,
      ...res
    })
  }
  return (
    <View className="container">
      <DocsHeader title='Form'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>form</View>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='shopName' 
              title='商品名称' 
              type='text' 
              placeholder='单行文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />
            <SlField
              name='imgDes' 
              title='图片描述' 
              type='text' 
              placeholder='单行文本' 
              value={form.value} 
              required
              onChange={(e) => change({ imgDes: e })} 
            />
            <SlField
              name='s' 
              title='图片描述' 
              type='text'
              value='323'
              required
              readonly
              onChange={(e) => change({ imgDes: e })} 
            />
            <SlField
              name='a' 
              title='图片描述' 
              value='323'
              required
              isLink
              linkSlot={'fdf'}
              readonly
              onChange={(e) => change({ imgDes: e })} 
            />
            <SlField
              name='v' 
              title='图片描述' 
              value='3232'
              required
              readonly
              isLink
              linkText='322f'
              onLink={ () => { console.log(111) } }
            />
            <SlField
              name='h' 
              title='图片描述' 
              value='3232'
              required
              readonly
              contentColor="red"
              onLink={ () => { console.log(111) } }
            />

            <SlField
              name='o' 
              type='textarea'
              title='图片' 
              value='3232'
              placeholder="fsdfsdf"
            />

            <SlField
              name='o' 
              type='textarea'
              value='3232'
              placeholder="fsdfsdf"
            />

            <SlButton formType='submit'>提交</SlButton>
          </SlForm>
        </View>
      </View>
    </View>
  );
};

export default memo(Form);
```

## api
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
| focus | 是否聚焦 | boolean | false |
| required | 是否必填 | boolean | false |
| contentColor | 不可填的情况内容颜色 | String | false |
| isLink | 是否展示右侧箭头并开启点击反馈 | boolean | false |
| linkText | 是否展示右侧箭头名称 | String | false |
| linkSlot | 自定义右侧箭头信息 | React.ReactNode | false |
| onBlur | 输入框失去焦点时触发的事件，v2.0.3版本可以获取event参数 | InputFunction<string|number,BlurEventDetail> | - |
| onFocus | 输入框被选中时触发的事件，v2.0.3版本可以获取event参数 | InputFunction<string|number,FocusEventDetail> | - |
| onChange | 输入框值改变时触发的事件，开发者需要通过onChange事件来更新value值变化，onChange函数必填 | InputFunction<string|number,InputEventDetail,any> | - |
| onConfirm | 点击完成按钮时触发，v2.0.3版本可以获取event参数 | InputFunction<string|number,ConfirmEventDetail> | - |
| onClick | 当editable为false时，点击组件触发的事件，v2.3.3版本可以获取event参数 | (event? | - |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件 | (event? | - |
| onErrorClick | 点击错误按钮触发的事件，v2.3.3版本可以获取event参数 | (event? | - |
| onLink | 点击右侧箭头 | ()=>void | - |
