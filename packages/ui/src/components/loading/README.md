# Loading 加载
### 介绍
该标签在 Taro 的 Image 标签上面增加了错误处理、加载动画等属性
### 引入
```js
import { Loading } from 'tard'
```
## 代码演示
### 基础用法
```js
<Loading />  
```
### 颜色修改
通过修改 `color` 属性，修改背景颜色
```js
<Loading color="red" />
```

### 类型 ios
```js
<Loading type="ios" />
```

### 类型 loading
```js
<Loading type="loading" />
```

### 大小
修改属性 `size` 改变大小
```js
<Loading size={ 100 } />
```

### 全局定位
增加属性 `overlay` 全局定位展示
```js
const [overlay, setOverlay] = useState<boolean>(false)

return (
  <View className="container">  
    <Button size="large" onClick={ () => setOverlay(true) }>点击</Button>
    {
      overlay && 
      <Loading 
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

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| color | 颜色 | string | - |
| type | 类型 | 'default'｜'ios' | default |
| overlay | 是否有全局定位 | boolean | false |
| size | loading大小 | number | 50px |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick | 点击格子时触发 | - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  --loading-zindex | 1090 |
|  --loading-sp | 50px |
