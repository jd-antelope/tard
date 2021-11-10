import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
## 介绍
向下弹出的菜单列表。
## 引入
~~~js
import { SlDropdownMenu, SlDropdownMenuItem } from '@jd/selling-c-ui'
~~~
# 代码演示
## 基础用法
~~~js
import React, { useState } from 'react';
import { FC } from '@tarojs/taro';
import { SlDropdownMenu, SlDropdownMenuItem } from '@jd/selling-c-ui'

const DropdownMenu: FC = () => {

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState('a')

  const option1 = [
    { text: '全部订单', value: 0 },
    { text: '订单类型1', value: 1 },
    { text: '订单类型2', value: 2 },
  ]

  const option2 = [
    { text: '全部商品', value: 'a' },
    { text: '商品类型1', value: 'b' },
    { text: '商品类型2', value: 'c' },
  ]
 
  return (
    <View className="container">
      <SlDropdownMenu>
        <SlDropdownMenuItem 
            value={value1} 
            options={option1} 
            onChange={(value) => {setValue1(value)}} 
            />
        <SlDropdownMenuItem 
            value={value2} 
            title="商品类型" 
            options={option2} 
            onChange={(value) => {setValue2(value)}} 
            />
      </SlDropdownMenu>
    </View>
  );
};
~~~
## 自定义标题
~~~js
<SlDropdownMenu>
  <SlDropdownMenuItem 
    title="订单类型" 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <SlDropdownMenuItem 
    title="商品类型" 
    value={value2} 
    options={option2} 
    onChange={(value) => { setValue2(value) }} 
    />
</SlDropdownMenu>
~~~
## 自定义菜单内容
~~~js
<SlDropdownMenu>
  <SlDropdownMenuItem 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <SlDropdownMenuItem 
    title="筛选" 
    customContent={(<View>自定义菜单内容</View>)} 
    />
</SlDropdownMenu>
~~~

## 自定义菜单标题颜色
~~~js
<SlDropdownMenu activeColor="blue">
  <SlDropdownMenuItem 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <SlDropdownMenuItem 
    value={value2} 
    options={option2} 
    onChange={(value) => { setValue2(value) }} 
    />
</SlDropdownMenu>
~~~

## 自定义标题对齐方式
~~~js
<SlDropdownMenu titleAlign="left">
  <SlDropdownMenuItem 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <SlDropdownMenuItem 
    value={value2} 
    options={option2} 
    onChange={(value) => { setValue2(value) }} 
    />
</SlDropdownMenu>
~~~
# API
## DropdownMenu Props
|  参数   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| activeColor | 菜单标题和选项的选中态颜色 | string | 主题色 |
| titleAlign | 菜单标题对齐方式 | 'center' ｜ 'right' ｜ 'left' | 'center' |

## DropdownItem Props
|  参数   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| value | 当前选中项对应的 value | number｜string | 主题色 |
| title | 菜单项标题 | 	string | 当前选中项文字 |
| options | 选项数组 | 	Option[] | [] |
| customContent | 自定义内容 | 	元素 | - |

## DropdownItem Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| change | 点击选项导致 value 变化时触发 | value |

## Option 数据结构
|  键名   | 说明  | 类型 |
|  ----  | ----  | ---- |
| text | 文字 | string | 
| value | 标识符 | number | string |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}