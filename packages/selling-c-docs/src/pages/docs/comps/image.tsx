import MarkDown from '@/components/markdown'

const markdown = `
# Image
该标签在 Taro 的 Image 标签上面增加了错误处理、加载动画等属性
## 代码演示
### 引入
在 Taro 文件中引入组件
~~~js
import { SlImage } from '@jd/selling-c-ui'
~~~
### 基础用法
~~~js
import React from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlImage } from '@jd/selling-c-ui'

const Image: FC = () => {
  return (
    <View className="container">
      <View className='doc-body-content-tip'>基本用法</View>
      <SlImage className="base-image" src="https://storage.360buyimg.com/hawley-common/selling-logo.png" />
    </View>
  );
};
~~~

### 错误处理
传入的图片找不到或者加载不出来就会显示默认图片
~~~js
<SlImage className="base-image" src="" />
~~~

### 取消加载动画
~~~js
<SlImage 
  transition={ false } 
  className="base-image" 
  src="https://storage.360buyimg.com/hawley-common/selling-logo.png" 
/>
~~~

## Api
### Props
| 属性         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| src          | 图片链接     | string | -      |
| res          | 图片其他参数 | Image   | -      |
| transition | 是否展示动画 | boolean | -      |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}