# toast
按钮用于传递用户触摸时会触发的操作

## 代码演示
### 引入
在 Taro 文件中引入组件
```js
import { SlToast } from '@jd/selling-c-ui'
```
### 基础用法
```js
import React, { memo, useState, useCallback } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlToastProps } from '@test/selling-c-ui/types/toast'
import { SlToast, SlButton } from '@test/selling-c-ui'

const Toast: FC = () => {
  const [toast, setToast] = useState<SlToastProps>({ isOpened: false });

  const showHsToast = useCallback((toastParams) => {
    setToast({
      isOpened: true,
      ...toastParams,
      onClose: () => setToast({ isOpened: false, text: toastParams.text, status: toastParams.status })
    });
  }, []);

  return (
    <View className="container">
      <SlButton 
        size="large"
        onClick={ () => showHsToast({ text: '文本', duration: 2000 }) }
      >
        文本 Toast
      </SlButton>
          
      <SlToast { ...toast } />
    </View>
  );
};
```

### 自定义Icon
```js
showHsToast({ text: '成功', icon: 'analytics', duration: 2000 })
```

### 自定义图片
```js
showHsToast({ 
  text: '自定义图片', 
  image: 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png' 
})
```


### 添加遮罩层
```js
showHsToast({ text: '文本', hasMask: true })
```
### Error Toast
```js
showHsToast({ 
  text: '文本', 
  hasMask: true,
  status: 'error' 
})
```
### Success Toast
```js
showHsToast({ 
  text: '文本', 
  hasMask: true,
  status: 'success' 
})
```
### Loading Toast
```js
showHsToast({ 
  text: '文本', 
  hasMask: true,
  status: 'loading' 
})
```


## api
| 属性     | 说明                                     | 类型                | 默认值    |
| -------- | ---------------------------------------- | ------------------- | --------- |
| isOpened | 是否展示元素                             | boolean             | false     |
| text     | 元素的内容                               | string              | -         |
| icon     | icon的类型                               | string              | -         |
| image    | 元素展示的图片                           | string              | -         |
| status   | 元素的状态                               | 'error'             | 'loading' | 'success' | - |
| duration | 元素持续的事件（设置为0将不会自动消失）  | number              | 3000      |
| hasMask  | 是否存在底部遮罩层(无法点击底部的内容区) | boolean             | -         |
| onClick  | 元素被点击之后触发的事件                 | CommonEventFunction | -         |
| onClose  | 元素被关闭之后触发的事件                 | CommonEventFunction | -         |
