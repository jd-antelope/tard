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
    title="订单类型" 
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <SlDropdownMenuItem 
    title="筛选" 
    customContent={(<View>自定义菜单内容</View>)}
    >
  </SlDropdownMenuItem>
</SlDropdownMenu>
~~~

## 自定义菜单标题颜色
~~~js
<SlDropdownMenu>
  <SlDropdownMenuItem 
    title="订单类型" 
    activeColor="blue"
    value={value1} 
    options={option1} 
    onChange={(value) => { setValue1(value) }} 
    />
  <SlDropdownMenuItem 
    title="筛选" 
    activeColor="blue"
    customContent={(<View>自定义菜单内容</View>)}
    >
  </SlDropdownMenuItem>
</SlDropdownMenu>
~~~

`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}