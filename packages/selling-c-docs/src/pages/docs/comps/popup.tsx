import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
# Popup
用于响应用户的动作从底部弹出展示内容
## 使用指南
### 引入
~~~js
import { SlPopup } from '@jd/selling-c-ui'
~~~
### 基本用法
直接引入组件后即可使用、也可以自定义标题、标题对齐方式、是否允许区域外点击
~~~js
const Popup: FC = () => {
const [isOpened, setIsOPend] = useState<Boolean>(false)
const [isOpenedSelf, setIsOPendSelf] = useState<Boolean>(false)
  return (
    <View className="container">
      <DocsHeader title='Popup'></DocsHeader>
      <View className='operate-area'>
      <SlButton onClick={() =>{setIsOPend(true)}}>基础用法</SlButton>
      <SlButton onClick={() =>{setIsOPendSelf(true)}}>自定义标题、对齐方式、区域外点击关闭</SlButton>
      </View>
   
      <View className='doc-body'>
      <SlPopup isOpened={isOpened} onClose={() => setIsOPend(false)}/>
      <SlPopup isOpened={isOpenedSelf} onClose={() => setIsOPendSelf(false)}  outClose  title="自定义标题"/>
      </View>
    </View>
  );
};

export default memo(Popup);
~~~

### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 组件标题 | string | - |
| outClose | 是否允许外部点击关闭 | boolean | false |
| align | 头部标题的对齐方式 | string | center |
| isOpened | 组件是否显示 | boolean | false |
| onClose | 组件关闭回调 | Function | - |

### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
|@popup-height-min| 600px|
|@popup-height-max| 950px|
|@popup-header-height| 72px|
|@popup-height| 72px|
|@popup-header-position-right|48px|
|@popup-header-close-width| 40px|
|@popup-header-close-height| 40px|
|@popup-close-btn-width| 36px|
|@popup-close-btn-color| @color-grey-3|
|@zindex-popup__layout|1000|



`

export default function DocsPage() {
  return (
    <div className="markdown-body">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}