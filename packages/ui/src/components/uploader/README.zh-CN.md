# Uploader 上传
### 介绍
用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。
### 引入
```js
import { Uploader } from 'tard'
```
## 代码演示
### 基础用法
```js
<Uploader
  mediaType="video"
  multiple
  length={3} 
  maxCount={1}
  files={videos} 
  onChange={(v) => {}}
/>

<Uploader
  mediaType="camera" 
  length={3} 
  count={3}
  files={iamges} 
  onChange={(v) => { setImages(v) }}
/>
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| mediaType | 媒体组件类型 image or video | string | - |
| maxDuration | 当type为video时可指定最大时长默认30s内 | number | - |
| files | 图片文件数组, 元素为对象, 包含属性 url（必选) | File[] | - |
| mode | 图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) | string | aspectFill |
| showAddBtn | 是否显示添加图片按钮 | boolean | true |
| multiple | 是否支持多选 | boolean | false |
| length | 单行的图片数量，不能为 0 或负数 | number | 4 |
| maxCount | 一行显示最大值 | number | 3 |
| count | 最多可以选择的图片张数 | number | - |
| sizeType | 所选的图片的尺寸 | string[] | - |
| sourceType | 选择图片的来源 | string[] | - |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onChange | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引 | event |
| onImageClick | 点击图片触发的回调 | event |
| onFail | 选择失败触发的回调 | event |

### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
|  ---btn-add-color |  var(--color-grey-2) |
|  ---btn-remove-color |  --color-white |
|  ---btn-remove-bg-color |  var(--color-grey-1)
|  ---btn-remove-size |  30px |
|  ---btn-remove-pos |  -10px |
