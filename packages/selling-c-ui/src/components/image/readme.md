
# Image
### 介绍
该标签在 Taro 的 Image 标签上面增加了错误处理、加载动画等属性
## 代码演示
### 引入
```js
import { SlImage } from 'tard'
```
### 基础用法
```js
<SlImage className="base-image" src="https://storage.360buyimg.com/hawley-common/selling-logo.png" />
```

### 错误处理
传入的图片找不到或者加载不出来就会显示默认图片
```js
<SlImage className="base-image" src="" />
```

### 取消加载动画
```js
<SlImage 
  transition={ false } 
  className="base-image" 
  src="https://storage.360buyimg.com/hawley-common/selling-logo.png" 
/>
```

## API
### Props
相关属性沿用 `taro` 中 `Image`
| 属性         | 说明         | 类型    | 默认值 |
| ------------ | ------------ | ------- | ------ |
| src          | 图片链接     | string | -      |
| transition | 是否展示动画 | boolean | -      |
