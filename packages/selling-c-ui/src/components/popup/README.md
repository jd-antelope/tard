
# Popup 弹出框
### 介绍
用于响应用户的动作从底部弹出展示内容
### 引入

```js
import { SlPopup } from "@jd/selling-c-ui";
```
## 代码演示
### 基本用法
直接引入组件后即可使用、也可以自定义标题、标题对齐方式、是否允许区域外点击
```js
const Popup: FC = () => {
  const [isVisible, setIsVisible] = useState < Boolean > false;
  return (
    <View className="container">
      <SlButton
        onClick={() => {
          setIsVisible(true);
        }}
      >
        基础用法
      </SlButton>
      <SlPopup
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        title="默认标题"
      />
    </View>
  );
};

export default memo(Popup);
```

### 自定义属性

自定义标题、标题对齐方式、是否允许区域外点击

```js
const Popup: FC = () => {
  const [isVisibleSelf, setIsVisibleSelf] = useState < Boolean > false;
  return (
    <View className="container">
      <SlButton
        onClick={() => {
          setIsOPendSelf(true);
        }}
      >
        自定义标题、对齐方式、区域外点击关闭
      </SlButton>
      <SlPopup
        visible={isVisibleSelf}
        onClose={() => setIsVisibleSelf(false)}
        closeOnclickOverlay
        titleAlign="left"
        title="自定义标题"
      />
    </View>
  );
};

export default memo(Popup);
```

### Props

| 属性                | 说明                 | 类型     | 默认值 |
| ------------------- | -------------------- | -------- | ------ |
| title               | 组件标题             | string   | -      |
| closeOnclickOverlay | 是否允许外部点击关闭 | boolean  | false  |
| titleAlign          | 头部标题的对齐方式   | string   | center |
| visible             | 组件是否显示         | boolean  | false  |
| onClose             | 组件关闭回调         | function | -      |

### Events

| 事件名  | 说明         | 回调参数 |
| ------- | ------------ | -------- |
| onClose | 组件关闭回调 | -        |

### 样式变量

| 属性                         | 默认值        |
| ---------------------------- | ------------- |
| @popup-height-min            | 600px         |
| @popup-height-max            | 950px         |
| @popup-header-height         | 72px          |
| @popup-height                | 72px          |
| @popup-header-position-right | 48px          |
| @popup-header-close-width    | 40px          |
| @popup-header-close-height   | 40px          |
| @popup-close-btn-width       | 36px          |
| @popup-close-btn-color       | @color-grey-3 |
| @zindex-popup\_\_layout      | 1000          |
