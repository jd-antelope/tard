
# Loading
该标签在 Taro 的 Image 标签上面增加了错误处理、加载动画等属性
## 代码演示
### 引入
在 Taro 文件中引入组件
```js
import { SlLoading } from 'tard'
```
### 基础用法
```js
<SlLoading />  
```
### 颜色修改
通过修改 `color` 属性，修改背景颜色
```js
<SlLoading color="red" />
```

### 类型 ios
```js
<SlLoading type="ios" />
```

### 类型 loading
```js
<SlLoading type="loading" />
```

### 大小
修改属性 `size` 改变大小，基于750的尺寸 
```js
<SlLoading size={ 100 } />
```

### 展示遮罩
传入的图片找不到或者加载不出来就会显示默认图片
```js
const [overlay, setOverlay] = useState<boolean>(false)

return (
  <View className="container">  
    <SlButton size="large" onClick={ () => setOverlay(true) }>点击</SlButton>
    {
      overlay && 
      <SlLoading 
        onClick={ () => {
          setOverlay(false) 
        }} 
        size={ 100 } 
        overlay 
      />
    }
  </View>
);
```

## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| color | 颜色 | string | - |
| type | 类型 | 'default'|'ios'|'loading' | default |
| isMask | 是否有全局定位 | boolean | - |
| size | loading大小 | number | - |
| onClick | 点击事件 | CommonEventFunction | - |
