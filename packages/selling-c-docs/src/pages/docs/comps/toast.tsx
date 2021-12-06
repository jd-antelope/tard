import MarkDown from '@/components/markdown'

const markdown = `# Toast
### 介绍
按钮用于传递用户触摸时会触发的操作

## 代码演示
### 引入
在 Taro 文件中引入组件
~~~js
import { SlToast } from 'tard'
~~~
### 基础用法
~~~js
const Toast: FC = () => {
  const [open, setOpen] = useState({ false });
  return (
    <View className="container">
      <SlToast
        visible={ open }
        text='文本'
        onClose={ () => setOpen(true) }
      />
    </View>
  );
};
~~~

### 自定义Icon
通过 ~icon~ 属性可以自定义toast中展示的图片
~~~js
<SlToast
  visible={ open }
  text='文本'
  icon='analytics'
  onClose={ () => setOpen(true) }
/>
~~~

### 自定义图片
通过 ~image~ 属性自定义图片链接可以修改toast中展示的图片
~~~js
<SlToast
  visible={ open }
  text='自定义图片'
  image='http://storage.360buyimg.com/mtd/home/group-21533885306540.png' 
  onClose={ () => setOpen(true) }
/>
~~~

### 添加遮罩层
当属性 ~hasMask~ 属性为 true 的时候, 会出现遮罩层
~~~js
<SlToast
  visible={ open }
  text='文本'
  overlay={true}
  onClose={ () => setOpen(true) }
/>
~~~

### 错误类型
当属性 ~status~ 为 ~error~ 时会展示失败图片
~~~js
<SlToast
  visible={ open }
  text='文本'
  status='error' 
/>
~~~

### 成功类型
当属性 ~status~ 为 ~success~ 时会展示成功图片
~~~js
<SlToast
  visible={ open }
  text='文本'
  status='success' 
/>
~~~
### 加载类型
当属性 ~status~ 为 ~loading~ 时会展示加载中图片
~~~js
<SlToast
  visible={ open }
  text='文本'
  status='loading' 
/>
~~~


## API
### Props
| 属性     | 说明                                     | 类型                | 默认值    |
| -------- | ---------------------------------------- | ------------------- | --------- |
| visible | 是否展示元素                             | boolean             | false     |
| text     | 元素的内容                               | string              | -         |
| icon     | icon的类型                               | string              | -         |
| image    | 元素展示的图片                           | string              | -         |
| status   | 元素的状态                               | 'error'｜'loading'｜'success' | - |
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
|  @slc-toast-min-width | 256px |
|  @slc-toast-image-size | 120px |
|  @slc-toast-font-size  | @font-size-base |
|  @slc-toast-icon-size  |  80px |
|  @slc-toast-color  | @color-white |
|  @slc-toast-bg-color | rgba(0, 0, 0, 0.8) |
`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}