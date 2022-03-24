
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

### 形状图片
通过 `round` 属性可以设置图片变圆, 修改属性 `radius` 属性可以改变圆角大小
```js
<SlImage className="base-image doc-body-content__pr" src={ src } round />
<SlImage className="base-image doc-body-content__pr" src={ src } radius={ 16 } />
```

### 加载中提示
添加属性`showLoading`可增加图片加载提示, 增加属性 `loadingContent` 自定义加载加载提示
```js
<SlImage
  src=""
  showLoading
/>
<SlImage 
  src=""
  showLoading
  loadingContent={ <Icon value='loading-2' size={20} /> } 
/>
```

### 加载失败提示
传入的图片找不到或者加载不出来就会显示默认图片, 增加属性 `errorContent` 自定义加载加载提示
```js
<SlImage 
  src="" 
  errorContent={ <View>加载失败</View> } 
/>
```

## API
### Props
相关属性沿用 `taro` 中 `Image` 属性
| 属性         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| src          | 图片链接     | string | -      |
| transition | 是否展示动画 | boolean | true      |
| errorContent | 自定义失败内容 | React.ReactNode | -      |
| preview | 是否支持全屏预览图片 | boolean | false      |
| radius | 圆角大小，默认单位为px | number | 0      |
| round | 是否显示为圆形 | boolean | false      |
| showLoading | 自定义加载内容 | boolean | true      |
| loadingContent | 是否展示动画 | React.ReactNode | -      |

### GridItem Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击图片时触发 | - |
