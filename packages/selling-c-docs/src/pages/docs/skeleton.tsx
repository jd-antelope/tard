import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = ` 
# skeleton
该标签设计了简单的骨架结构
## 代码演示
### 引入
在 Taro 文件中引入组件
~~~js
import { SlSkeleton } from '@jd/selling-c-ui'
~~~
### 基础用法
~~~js
import React from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSkeleton } from '@jd/selling-c-ui'

const Skeleton: FC = () => {
  return (
    <View className="container">
      <SlSkeleton />
    </View>
  );
};
~~~

### 自定义宽高
可以设置 width 和 height 属性去自定义宽高
~~~js
<SlSkeleton width={ 500 } height={ 40 } />
~~~

### 类型 圆角
修改属性 type=rounded 时可将元素变成圆角
~~~js
<SlSkeleton width={ 50 } height={ 50 } type="rounded" />
~~~

### 类型 直角
修改属性 type=squared 时可将元素变成直角
~~~js
<SlSkeleton width={ 500 } height={ 40 } type="squared" />
~~~

## Api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| width | 宽 | number | - |
| height | 高 | number | - |
| type | 圆角类型 | Type | - |

## Type 数据结构
|  键名   | 含义  |
|  ----  | ----  |
| default | 默认8像素圆角 |
| rounded | 圆角 |
| squared | 直角 |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}