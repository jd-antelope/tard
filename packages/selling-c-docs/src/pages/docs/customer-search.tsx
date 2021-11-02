import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# customer-seacher

## 介绍
带搜索按钮的输入框。
## 引入
~~~js
import { SlCustomerSearch } from '@jd/selling-c-ui'
~~~
# 代码演示
## 基础用法
~~~js
import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCustomerSearch } from '@test/selling-c-ui'

const CustomerSearch: FC = () => {
 
  return (
     <View className="container">
        <SlCustomerSearch onConfirm={(data)=>{ console.log(data,"父组件内容 ")}} />
    </View>
  );
};
~~~

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| value | 输入框的初始内容 | 	string | - |
| placeholder | 输入框为空时占位符 | 	string | - |
| disabled | 是否禁用 | 	boolean | false |
| onFocus | 输入框聚焦时触发 | BaseEventOrigFunction<inputForceEventDetail> | - |
| onBlur | 输入框聚焦时触发 | BaseEventOrigFunction<inputValueEventDetail>| - |
| onConfirm | 点击完成按钮时触发 | BaseEventOrigFunction<inputValueEventDetail> | - |

`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}