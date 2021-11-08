import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# cell

## 介绍
单元格
## 引入
~~~js
import { SlCell } from '@jd/selling-c-ui'
~~~
# 代码演示
## 基础用法
~~~js
import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCell } from '@test/selling-c-ui'

const Cell: FC = () => {
 
  return (
     <View className="container">
        <SlCell  onClick={()=>{console.log("触发点击事件")}}    title={"左侧标题"}  value={"右侧内容"}/>
    </View>
  );
};
~~~

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 输入框的初始内容 | 	string | - |
| value | 右侧内容 | 	string | - |
| icon | 右侧图标 | 	string | - |
| height | 单元格高度 | 	number | 100 |
| onClick | 点击右侧内容时触发 | CommonEventFunction | - |


`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}