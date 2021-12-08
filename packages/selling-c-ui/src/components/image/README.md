
# Image 图片
### 介绍
该标签在 Taro 的 Image 标签上面增加了错误处理、加载动画等属性
### 引入
```js
import { SlImage } from 'tard'
```
## 代码演示
### 基础用法
```js
<SlImage className="base-image" src="https://storage.360buyimg.com/hawley-common/selling-logo.png" />
```

### 错误处理
传入的图片找不到或者加载不出来就会显示默认图片
```js
<SlImage className="base-image" src="" />
```

### 自定义加载失败提示
增加属性 `errorContent` 自定义加载失败提示
```js
<SlImage 
  className="base-image" 
  src="" 
  errorContent={ <View>加载失败</View> } 
/>
```

### 增加预览效果
增加属性 `preview` 增加图片预览功能
```js
<SlImage 
  preview 
  className="base-image" 
  src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" 
/>
```

## API
### Props
相关属性沿用 `taro` 中 `Image`
| 属性         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| src          | 图片链接     | string | -      |
| transition | 是否展示动画 | boolean | true      |
| errorContent | 自定义失败内容 | React.ReactNode | -      |
| preview | 是否支持全屏预览图片 | boolean | false      |

### GridItem Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击图片时触发 | - |
