# ConfigProvider 全局配置
### 介绍
用于配置 Tard 组件的主题样式，从 `0.0.2-alpha.0` 版本开始支持
### 引入
```js
import { ConfigProvider } from 'tard'
```

## 定制主题
Tard 组件通过丰富的 `CSS 变量` 来组织样式，通过覆盖这些 `CSS 变量`，可以实现定制主题、动态切换主题等效果

## 代码演示
### 全局配置

#### 切换主题
调用 `ConfigProvider.config` 配置方法设置主题色：
```js
  const [value, setValue] = useState<boolean>(true);
  const changeTheme = () => {
    ConfigProvider.config({
        theme: {
            'color-primary': 'purple',
            "button-radius": '20px'
        }
    });
  }

  const changeThemeBlack = () => {
    ConfigProvider.config({
        theme: {
            'color-primary': 'black',
            "button-radius": '0px'
        }
    });
  }

  const changeThemeInit = () => {
    ConfigProvider.config({
        theme: {}
    })
  }

<Button className="button-box__item" type="default" onClick={() => changeTheme()}>紫色圆角</Button>
<Button className="button-box__item" type="default" onClick={() => changeThemeBlack()}>黑色直角</Button>
<Button className="button-box__item" type="default" onClick={() => changeThemeInit()}>默认</Button>
<Button className="button-box__item" type="primary">主要按钮</Button>
<Button className="button-box__item" type="info">信息按钮</Button>
<Button className="button-box__item" type="default">默认按钮</Button>
<Button className="button-box__item" type="danger">危险按钮</Button>
<Button className="button-box__item" type="warning">警告按钮</Button>
<Button className="button-box__item" type="success">成功按钮</Button>

<Switch checked={value}
    onChange={(v) => {
        setValue(v);
    }}
/>
```

#### 自定义样式前缀
除此之外，还可以调用 `ConfigProvider.config` 配置方法设置组件的class前缀名，默认是 `tard`
```js
ConfigProvider.config({
    cssPrefix: 'custom'
});
```
同事需要配置样式文件前缀名，在入口样式文件按如下配置
```less
@--css-prefix: 'custom'
```
> 注意：`ConfigProvider.config` 配置的 `cssPrefix` 一定要与样式配置的 `@--css-prefix` 一致，否则样式失效
### 自定义CSS变量
以 `Button` 组件为例，查看组件的样式，可以看到 `Button` 类名上存在以下变量
```less
:root, page {
  --button-height: 76px;
  --button-default-v-padding: 40px;
  --button-min-width: 192px;
  --button-min-width-mini: 120px;
  --button-height-mini: 32px;
  --button-mini-text-size: 24px;
  --button-mini-v-padding: 6px;
  --button-min-width-small: 144px;
  --button-height-small: 56px;
  --button-small-text-size: var(--font-size-base);
  --button-small-v-padding: 24px;
  --button-min-large-width: 360px;
  --button-large-height: 96px;
  --button-large-text-size: var(--font-size-lg);
  --button-large-v-padding: 48px;
  --button-radius: var(--border-radius-md);
}
```

#### 通过 CSS 覆盖
你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：
```less
--button-radius: 10px;
--color-primary: 'green'
```
这些变量的默认值被定义在 `root` 节点上，`HTML` 文档的任何节点都可以访问到这些变量

#### 通过 ConfigProvider 覆盖
`ConfigProvider` 组件提供了覆盖 `CSS` 变量的能力，你需要在根节点包裹一个 ConfigProvider 组件，并通过 `style` 属性来配置一些主题变量
```js
 // 比如 button-radius 会转换成 `--button-radius`
<ConfigProvider style={{ 'button-radius': '0px', 'color-primary': 'green' }}>
  <Button className="button-box__item" type="primary">主要按钮</Button>
</ConfigProvider>
```

> 注意：ConfigProvider 仅影响它的子组件的样式，不影响全局 root 节点