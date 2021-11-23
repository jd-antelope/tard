import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `# Canvas
该组件是为了给海报功能提供方便，里面有关闭和保存图片功能。目前该组件不支持h5，后续会进行优化。

## 代码演示
### 引入
在 Taro 文件中引入组件
~~~js
import { SlCanvas } from '@jd/selling-c-ui'
~~~

### 基础用法
通过 contentCallback 函数进行补充 canvas 内容，里面有两个参数，第一个是微信方法 createCanvasContext 的实例，第二个是换算单位，按750的设计去计算数据。
~~~js
import React, { memo, useState, useCallback } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCanvas, SlButton } from '@jd/selling-c-ui'
import { SlCanvasProps } from '@jd/selling-c-ui/types/canvas'

const Canvas: FC = () => {
  const [canvasProps, setCanvasProps] = useState<SlCanvasProps>({ 
    isOpened: false,
    onClose: () => setCanvasProps({ isOpened: false })
  });

  const showSlCanvas = useCallback((toastParams) => {
    setCanvasProps({
      isOpened: true,
      ...toastParams,
      onClose: () => setCanvasProps({ isOpened: false })
    });
  }, []);

  return (
    <View className="container">
      <SlButton 
        size="large"
        onClick={ 
          () => showSlCanvas({ 
            contentCallback: (ctx, dpr) => {
              ctx.setFontSize(8 * dpr);
              ctx.setFillStyle('#333');
              ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
            } 
          }) 
        }
      >基本案例</SlButton>
      <SlCanvas { ...canvasProps } />
    </View>
  );
};
~~~

### 自定义宽高
通过属性 width height 可以自定义 canvas 的宽高
~~~js
showSlCanvas({ 
  width: 500,
  height: 400,
  contentCallback: (ctx, dpr) => {
    ctx.setFontSize(8 * dpr);
    ctx.setFillStyle('#333');
    ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
  } 
})
~~~

### 无遮照展示
通过属性 overlay 可以将外面遮照去掉，只留canvas本身内容
~~~js
<SlCanvas 
  isOpened
  overlay={ false }
  contentCallback={(ctx, dpr) => {
    ctx.setFontSize(8 * dpr);
    ctx.setFillStyle('#333');
    ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
  } }
/>
~~~

## api
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| width | 宽度 | number | - |
| height | 高度 | number | - |
| overlay | 是否有遮照 | boolean | true |
| isOpened | 是否打开 | boolean | - |
| onClose | 关闭回调 | Function | - |
| contentCallback | 内容方法@paramctxcanvas实例@paramdpr数字计算 | (ctx,dpr)=>void | - |
`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}