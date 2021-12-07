# 主题定制

## 介绍
Tard 提供了一套默认主题，`CSS` 命名采用 `BEM` 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以按照本文档进行主题定制。


## 样式变量
Tard 使用了 `Less` 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

下面是所有的基础样式变量，组件的颜色等变量请参考各个组件的文档或[配置文件](TODO)
```css
@--css-prefix: slc;
/* Info Color
-------------------------- */
@primary-color: var(--primaryColor);

/* Color */
@color-success: #13CE66;
@color-error: #FF4949;
@color-warning: #FFC82C;
@color-info: #78A4FA;

/* Color Palette */
@color-black-0: #000;
@color-black-1: #333;
@color-black-2: #7F7F7F;
@color-black-3: #B2B2B2;

@color-grey-0: #333;
@color-grey-1: #666;
@color-grey-2: #999;
@color-grey-3: #CCC;
@color-grey-4: #E5E5E5;
@color-grey-5: #F0F0F0;
@color-grey-6: #F7F7F7;
@color-grey-7: #EFEFEF;

@color-white: #FFF;

/* Text Color */
@color-text-base: #333; // 文字的基本色
@color-text-base-inverse: #FFF; // 反色
@color-text-secondary: #36D57D; // 辅助色
@color-text-placeholder: #C9C9C9;
@color-text-disabled: #CCC;
@color-text-title: #2C405A; // 文章标题
@color-text-paragraph: #3F536E; // 文章段落

/* Rate Color */
@color-rate-base: #ECECEC;
@color-rate-on: #FFCA3E;

/* opacity*/
@opacity-active: .8;
@opacity-disabled: .3;

@overlay-bg-color: rgba(0,0,0,0.65);

@color-link: #6190E8;
@color-link-hover: #79A1EB;
@color-link-active: #4F7DE2;
@color-link-disabled: #BFBFBF;

/* 背景色 */
@color-bg: #FFF;
@color-bg-base: #FAFBFC;
@color-bg-light: #ECF5FD;
@color-bg-lighter: mix(#FFF, @color-bg-light, 50%);
@color-bg-grey: #F7F7F7;

/* 边框颜色 */
@color-border-base: #C5D9E8;
@color-border-split: mix(#FFF, @color-border-base, 20%);
@color-border-light: mix(#FFF, @color-border-base, 30%);
@color-border-lighter: mix(#FFF, @color-border-base, 50%);
@color-border-lightest: mix(#FFF, @color-border-base, 80%);
@color-border-grey: #CCC;

/* 图标颜色 */
@color-icon-base: #CCC;

/**
* CSS cubic-bezier timing functions
* http://bourbon.io/docs/#timing-functions
*/
@ease-out-quad: cubic-bezier(0.250, 0.460, 0.450, 0.940);
@ease-in-out-quad: cubic-bezier(0.455, 0.030, 0.515, 0.955);

/* Font */
@font-size-xs: 10px * @hd; // 非常用字号，用于标签
@font-size-sm: 12px * @hd; // 用于辅助信息
@font-size-base: 14px * @hd; // 常用字号
@font-size-lg: 16px * @hd; // 常规标题
@font-size-xl: 18px * @hd; // 大标题
@font-size-xxl: 20px * @hd; // 用于大号的数字

/* z-index */
@zindex-form: 700;
@zindex-toast: 1090;
@zindex-modal: 1000;
@zindex-popup__layout:1000;
@zindex-nav: 800;
@zindex-loading: 1090;
@zindex-overlay: 1000;

/* 水平间距 */
@spacing-h-sm: 3px * @hd;
@spacing-h-md: 8px * @hd;
@spacing-h-lg: 12px * @hd;
@spacing-h-xl: 16px * @hd;

/* 垂直间距 */
@spacing-v-xs: 3px * @hd;
@spacing-v-sm: 6px * @hd;
@spacing-v-md: 9px * @hd;
@spacing-v-lg: 12px * @hd;
@spacing-v-xl: 15px * @hd;

/* Border Radius */
@border-radius-sm: 2px * @hd;
@border-radius-md: 8px;
@border-radius-lg: 12px;
@border-radius-hg: 20px;
@border-radius-circle: 50%;

/* Line Height */
@line-height-base: 1; // 单行
@line-height-en: 1.3; // 英文多行
@line-height-zh: 1.5; // 中文多行
```