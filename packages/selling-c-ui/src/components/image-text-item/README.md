# image-text-item

### 介绍
渲染图片文字。
### 引入
```js
import { SlImageTextItem } from '@test/selling-c-ui'
```
## 代码演示
### 基础用法
```js
import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlImageTextItem } from '@test/selling-c-ui'

const ImageTextItem: FC = () => {
 
  return (
    <View className="container">
     <SlImageTextItem propsData={
        [
          {
            image:"src",
            text: "测试",
            id: 123321
          },
      ]
      }
       isUp={true} onClick={(data)=>{ console.log(data,"父组件内容 ")}}/>
  </View>
  );
};
```


## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| isUp | 是否显示图片在上 | 	boolean | true |
| propsData | 需要传入的内容 | 	Array | - |
| onClick | 点击item返回整个对象 | 	CommonEventFunction | - |


