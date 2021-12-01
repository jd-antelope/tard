import MarkDown from '@/components/markdown'

const markdown = `# Form
## 代码演示
### 引入
在 Taro 文件中引入组件
~~~js
import { SlForm } from '@jd/selling-c-ui'
~~~

### 基本用法
~~~js
import React, { useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from '@jd/selling-c-ui'

const Form: FC = () => {
  const [form, setForm] = useState({
    shopName: ''
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
      <SlButton formType='submit'>提交</SlButton>
    </View>
  );
};
~~~

### 边框
增加属性 border 显示 form 外边框
~~~js
<SlForm onSubmit={onSubmit} border>
  ...
</SlForm>
~~~

## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| reportSubmit | 是否返回formId用于发送模板消息 | boolean | false |
| border | 是否需要border | boolean | false |
| onSubmit | 携带form中的数据触发submit事件，由于小程序组件化的限制，onSubmit事件获得的event中的event.detail.value始终为空对象，开发者要获取数据，可以自行在页面的state中获取 | FormFunction | - |
| onReset | 表单重置时会触发reset事件 | FormFunction | - |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}