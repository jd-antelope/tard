# form
## 代码演示
### 基本用法
```js
import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from '@test/selling-c-ui'

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
          </SlForm>

          <View className='doc-body-content-tip'>border 属性</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='shopName' 
              title='商品名称' 
              type='text' 
              placeholder='单行文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />
          </SlForm>
        </View>
      </View>
    </View>
  );
};

export default memo(Form);
```
### border
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
          </SlForm>

          <View className='doc-body-content-tip'>border 属性</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='shopName' 
              title='商品名称' 
              type='text' 
              placeholder='单行文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />
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
| reportSubmit | 是否返回formId用于发送模板消息 | boolean | false |
| border | 是否需要border | boolean | false |
| onSubmit | 携带form中的数据触发submit事件，由于小程序组件化的限制，onSubmit事件获得的event中的event.detail.value始终为空对象，开发者要获取数据，可以自行在页面的state中获取 | FormFunction | - |
| onReset | 表单重置时会触发reset事件 | FormFunction | - |
