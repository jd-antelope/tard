# Toast 轻提示
### 介绍
按钮用于传递用户触摸时会触发的操作
### 引入
```js
import { SlToast } from 'tard'
```

## 代码演示
### 文字提示
默认文本为单行文本内容最大宽度为460px
```js
const Toast: FC = () => {
  const [toastParams, setToastParams] = useState({ { text: '普通提示', visible:true } });
  return (
    <View className="container">
      <SlToast
        { ...toastParams}
        onClose={  onClose: () => setToast({ visible: false, text: '', status: '' }) }
      />
    </View>
  );
};
```

### 长文案提示
Toast最多支持两行文字显示
```js
const Toast: FC = () => {
  const [toastParams, setToastParams] = useState({ { text: 'Toast文案很长，最多支持两行文字显示', visible:true } });
  return (
    <View className="container">
      <SlToast
        { ...toastParams}
        onClose={  onClose: () => setToast({ visible: false, text: '', status: '' }) }
      />
    </View>
  );
};
```

### 加载提示
通过 
通过`status`指定提示状态，可选值为`loading`、`success`、`error`,你可通过`text`自定义需要的文案
```js
const Toast: FC = () => {
  const [toastParams, setToastParams] = useState({ {text: '加载中...',  status: 'loading' visible:true } });
  return (
    <View className="container">
      <SlToast
        { ...toastParams}
        onClose={  onClose: () => setToast({ visible: false, text: '', status: '' }) }
      />
    </View>
  );
};
```

### 自定义图标
可以通过icon属性设置自定义图标,具体参考SlIcon组件的属性进行选取
```js
const Toast: FC = () => {
  const [toastParams, setToastParams] = useState({ {text: '自定义图标', icon: 'bell',visible:true } });
  return (
    <View className="container">
      <SlToast
        { ...toastParams}
        onClose={  onClose: () => setToast({ visible: false, text: '', status: '' }) }
      />
    </View>
  );
};
```
### 自定义图片
可以通过image属性设置自定义图片也可以同时指定`status`属性值为loading实现自定义loading图片的效果
```js
const Toast: FC = () => {
  const [toastParams, setToastParams] = useState({ {text: '自定义图片',
   image: 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png',visible:true } });
  return (
    <View className="container">
      <SlToast
        { ...toastParams}
        onClose={  onClose: () => setToast({ visible: false, text: '', status: '' }) }
      />
    </View>
  );
};
```
### 自定义位置
设置top属性，设置弹窗在页面上的不同位置进行显示
```js
const Toast: FC = () => {
  const [toastParams, setToastParams] = useState({ {text: '顶部展示', top:'20%'
,visible:true } });
  return (
    <View className="container">
      <SlToast
        { ...toastParams}
        onClose={  onClose: () => setToast({ visible: false, text: '', status: '' }) }
      />
    </View>
  );
};
```
## API
### Props
| 属性     | 说明                                     | 类型                | 默认值    |
| -------- | ---------------------------------------- | ------------------- | --------- |
| visible | 是否展示元素                             | boolean             | false     |
| text     | 元素的内容                               | string              | -         |
| icon     | icon的类型                               | string              | -         |
| image    | 元素展示的图片                           | string              | -         |
| status   | 元素的状态                               | 'error'｜'loading'｜'success' | - |
| top      | toast展示位置 支持百分比和px                           |string|            | 50%|
| duration | 元素持续的事件（设置为0将不会自动消失）  | number              | 3000      |
| overlay  | 是否存在底部遮罩层(无法点击底部的内容区) | boolean             | false        |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClick  | 元素被点击之后触发的事件 | - |
| onClose  | 元素被关闭之后触发的事件 | - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @toast-min-width | 248px |
|  @toast-max-width | 460px |
|  @toast-image-size | 64px |
|  @toast-font-size  | @font-size-base |
|  @toast-icon-size  |  64px |
|  @toast-color  | @color-white |
|  @toast-slot-vertical-padding | 30px |
|  @toast-slot-horizontal-padding | 32px |
|  @toast-icon-margin--top | 24px |
|  @toast-bg-color | rgba(0, 0, 0, 0.8) |
