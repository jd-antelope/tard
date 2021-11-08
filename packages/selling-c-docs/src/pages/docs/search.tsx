import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# search

## 介绍
带搜索按钮的输入框。
## 引入
~~~js
import { SlSearch } from '@jd/selling-c-ui'
~~~
# 代码演示
## 基础用法
~~~js
import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSearch } from '@test/selling-c-ui'

const Search: FC = () => {
 
  return (
     <View className="container">
        <SlSearch onConfirm={(data)=>{ console.log(data,"父组件内容 ")}} />
    </View>
  );
};
~~~

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| value | 输入框的初始内容 | 	string | - |
| height | 输入框的高度 | 	number | 58 |
| width | 输入框的宽度 | 	number | 220 |
| placeholder | 输入框为空时占位符 | 	string | - |
| disabled | 是否禁用 | 	boolean | false |
| isSkip | 是否跳转页面 | 	boolean | false |
| onClick | 点击输入框是触发 | BaseEventOrigFunction<inputForceEventDetail> | - |
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