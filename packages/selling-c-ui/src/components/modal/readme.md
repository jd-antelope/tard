# Modal 对话框
### 介绍
弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作
### 引入
```js
import { SlModal } from '@jd/selling-c-ui'
```
## 代码演示
### 基础用法
`isOpened` 属性控制是否显示模态框，`confirmText` 属性表示确定按钮文案，存在改属性时才会显示确定操作按钮，按钮默认演示为主题色，可通过样式变量`@slc-modal-btn-confirm-color`修改， `onClose` 属性为点击遮罩层触发事件
```js
const [isOpened, setIsOpened] = useState(false)
const [isOpened1, setIsOpened1] = useState(false)
const [isOpened2, setIsOpened2] = useState(false)

<SlButton full onClick={() => setIsOpened(true)}>提示弹窗</SlButton>
<SlModal
    isOpened={isOpened}
    title='标题'
    confirmText='确认'
    onClose={() => setIsOpened(false)}
    onConfirm={() => setIsOpened(false)}
    content='弹框内容'
/>

<SlButton full onClick={() => setIsOpened1(true)}>提示弹窗（无标题）</SlButton>
<SlModal
    isOpened={isOpened1}
    confirmText='确认'
    onClose={() => setIsOpened1(false)}
    onConfirm={() => setIsOpened1(false)}
    content='弹框内容'
/>

<SlButton full onClick={() => setIsOpened2(true)}>确定弹窗</SlButton>
<SlModal
    title='标题'
    isOpened={isOpened2}
    confirmText='确认'
    cancelText='取消'
    onClose={() => setIsOpened2(false)}
    onConfirm={() => setIsOpened2(false)}
    onCancel={() => setIsOpened2(false)}
    content='弹框内容'
/>
```

### 自定义内容对齐方式
通过 `contentAlign` 属性可以自定义内容对齐方式
```js
const [isOpened, setIsOpened] = useState(false)

<SlButton full onClick={() => setIsOpened(true)}>提示弹窗</SlButton>
<SlModal
    isOpened={isOpened}
    title='标题'
    confirmText='确认'
    onClose={() => setIsOpened(false)}
    onConfirm={() => setIsOpened(false)}
    content='弹框内容'
    contentAlign='left'
/>
```

### 自定义弹框
通过 `SlModalContent` 标签自定义 content；通过 `SlModalHeader` 标签自定义 `title` ；通过自定义 `SlModalAction` 标签自定义操作按钮
```js
<SlButton full onClick={() => setIsOpened5(true)}>自定义内容</SlButton>
<SlModal
    isOpened={isOpened5}
    title="标题"
    confirmText='确认'
    onClose={() => setIsOpened5(false)}
    onConfirm={() => setIsOpened5(false)}
    contentAlign='left'
>
    <SlModalContent>
        <Image style="width:100%; height:100%" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
    </SlModalContent>
</SlModal>

<SlButton full onClick={() => setIsOpened4(true)}>自定义内容、标题、操作按钮</SlButton>
<SlModal isOpened={isOpened4}>
    <SlModalHeader>标题</SlModalHeader>
    <SlModalContent>
        <Image style="width:100%; height:100%" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
    </SlModalContent>
    <SlModalAction>
        <Button onClick={() => { setIsOpened4(false) }}>取消</Button>
        <Button onClick={() => { setIsOpened4(false) }}>确定</Button>
    </SlModalAction>
</SlModal>
```
## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| title | 元素的标题 | string | - |
| isOpened | 是否显示模态框 | boolean | false |
| content | 元素的内容 | string | - |
| contentAlign | 元素的内容对齐方式 | 'center' ｜ 'left' ｜ 'right' | 'center' |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | boolean | true |
| cancelText | 取消按钮的文本 | string | - |
| confirmText | 确认按钮的文本 | string | - |
| onClose | 触发关闭时的事件 | CommonEventFunction | - |
| onCancel | 点击取消按钮触发的事件 | CommonEventFunction | - |
| onConfirm | 点击确认按钮触发的事件 | CommonEventFunction | - |

### 样式变量
|  名称  | 默认值 |
|  ---- | ---- |
|  @slc-modal-width | 540px |
|  @slc-modal-header-text-color | @color-text-base |
|  @slc-modal-content-text-color  | @color-text-base |
|  @slc-modal-btn-default-color | @color-text-base |
|  @slc-modal-btn-confirm-color  | @primary-color |
|  @slc-modal-bg-color | @color-white |