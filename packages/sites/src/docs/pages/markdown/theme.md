# 主题定制

## 介绍
Tard 提供了一套默认主题，`CSS` 命名采用 `BEM` 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制

## 样式变量
Tard 使用了 `Less` 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是所有的基础样式变量，组件的颜色等变量请参考各个组件的文档或[配置文件](TODO)
```css
// 定义前缀
@--css-prefix: tard;

:root, page {
  // color base
  // 品牌色，用于常规商品价格、功能按钮、促销活动等
  --color-primary: #FF2929;

  // color function
  // 功能色，用于成功/通过等正向反馈
  --color-success: #13CE66;
  // 功能色，用于失败/警告等负向反馈
  --color-error: #FF4949;
  // 功能色，用于提示/警示等需要引起用户注意的场景
  --color-warning: #FFC82C;
  // 功能色，用于标识其他场景
  --color-info: #78A4FA;
  // 非常规用色，用于页面遮罩等
  --color-black: #000000;
  // 主内容用色，用于常规标题内容、细文浏览、按钮文字及图标引导
  --color-grey-0: #333333;
  // 次要内容用色，用于次级标题内容、属性标示、非主要信息引导及常规按钮边框等
  --color-grey-1: #999999;
  // 特殊内容用色，用于无货标签文字、特殊不可点击按钮等
  --color-grey-2: #CCCCCC;
  // 辅助内容用色，用于页面分割线、分割底色、选项按钮常规底色等 #EBEBEB
  --color-grey-3: #EFEFEF;
  // 非常规用色，用于文字反白等
  --color-white: #FFFFFF;

  // Text Color
  // 文字的基本色
  --color-text: var(--color-grey-0); 

  // 辅助色
  --color-text-secondary: var(--color-grey-1);
  --color-text-placeholder: #C9C9C9;
  --color-text-disabled: var(--color-grey-2);
  --color-text-placeholder: var(--color-grey-2);

  // overlay(@overlay-bg-color)
  --color-overlay: rgba(0, 0, 0, .65);

  // 边框颜色
  --color-border-base: var(--color-grey-3);
  --color-border-light: mix(#FFFFFF, #EFEFEF, 30%);

  // 图标颜色
  --color-icon-base: var(--color-grey-2);

  // opacity
  --opacity-active: .8;
  --opacity-disabled: .3;
  --zindex-common: 1000;

  // ease
  --ease-out-quad: cubic-bezier(.25, .46, .45, .94);
  --ease-in-out-quad: cubic-bezier(.455, .03, .515, .955);

  // Font
  --font-size-xs: 20px; // 非常用字号，用于标签
  --font-size-s: 22px;
  --font-size-sm: 24px; // 用于辅助信息
  --font-size-base: 28px; // 常用字号
  --font-size-lg: 32px; // 常规标题
  --font-size-xl: 36px; // 大标题
  --font-size-xxl: 40px; // 用于大号的数字
  --font-size-xxxl: 48px;
  --font-size-xxxxl: 60px;
  --font-size-max: 72px;

  // 水平间距
  --spacing-h-sm: 6px;
  --spacing-h-md: 16px;
  --spacing-h-lg: 24px;
  --spacing-h-xl: 36px;

  // 垂直间距
  --spacing-v-xs: 6px;
  --spacing-v-sm: 12px;
  --spacing-v-md: 18px;
  --spacing-v-lg: 24px;
  --spacing-v-xl: 30px;

  // Border Radius
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-hg: 20px;
  --border-radius-circle: 50%;

  // Line Height
  --line-height-base: 1; // 单行
  --line-height-: 1.2;
  --line-height-en: 1.3; // 英文多行
  --line-height-zh: 1.5; // 中文多行
  --line-height-lg: 2;

  // font family
  // 基本字体
  --family-base: -apple-system,
    blinkmacsystemfont,
    "Helvetica Neue",
    helvetica,
    segoe ui,
    arial,
    roboto,
    "PingFang SC",
    "miui",
    "Hiragino Sans GB",
    "Microsoft Yahei",
    sans-serif;
  // 数字字体
  --family-integer: arial, helvetica, sans-senif, microsoft yahei;

  // overlay
  --overlay-bg-color: rgba(0, 0, 0, .65);
}
```

## 定制方法
### 步骤一 引入样式源文件
定制主题时，需要引入组件对应的 Less 样式文件

```js
// app.js
// 引入全部样式
import 'tard/dist/style/index.less';

// 引入单个组件样式
import 'tard/dist/style/components/button.less';
```


```css
// app.css
@import "~tard/dist/style/index.less";
```

### 步骤二 修改样式变量
在组件文档的 "样式变量" 表格中，你可以查阅到每个组件暴露了都哪些 `less` 变量
以 `InputNumber` 组件为例，我们可以在它的文档上找到类似于下面这样的表格

|  名称  | 默认值 |
|  ---- | ---- |
|  --input-number-text-color | var(--color-text-base) |
|  --input-number-font-size | var(--font-size-base) |
|  --input-number-font-size-lg  | var(--font-size-xl) |
|  --input-number-btn-color | var(--color-primar) |
|  --input-number-btn-size  | 30px |
|  --input-number-btn-size-lg  | 36px |
|  --input-number-width-min | 36px |
|  --input-number-width-min-lg | 80px |
|  --input-number-btn-size  | 120px |

接下来，设置 `less` 变量的值即可

```css
// app.css
@import "~tard/dist/style/index.less";
:root, page {
  --input-number-text-color: #bbb;
  --input-number-btn-size: 100px;
}
```

