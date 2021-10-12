'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var components = require('@tarojs/components');
var cn = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".aaa {\n  background: red;\n  display: flex;\n  font-size: 24px;\n  line-height: 150;\n  height: 200px;\n}\n";
styleInject(css_248z$2);

var SlLoading = function () {
    return (React__default['default'].createElement(components.View, { className: "aaa" }, "111"));
};
var index$2 = React.memo(SlLoading);

var css_248z$1 = "";
styleInject(css_248z$1);

var SlUpload = function () {
    return React__default['default'].createElement(components.View, { className: "sl-upload-wrapper" }, "mmm");
};
var index$1 = React.memo(SlUpload);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var BUYIMG = 'https://storage.360buyimg.com/hishop-images/bumblebee-mobile';

var SlImage = /** @class */ (function (_super) {
    __extends(SlImage, _super);
    function SlImage(props) {
        var _this = _super.call(this, props) || this;
        var src = props.src;
        _this.state = {
            url: src,
            noImg: BUYIMG + "/common/no-img.png?1"
        };
        return _this;
    }
    SlImage.prototype.render = function () {
        var _a = this.props, res = _a.res, className = _a.className;
        var _b = this.state, url = _b.url, noImg = _b.noImg;
        return (React__default['default'].createElement(React.Fragment, null,
            React__default['default'].createElement(components.Image, __assign({}, res, { src: url, className: cn__default['default'](className, {
                    'hs-image-default': !url.includes(noImg),
                    'hs-image-none': url.includes(noImg)
                }) }))));
    };
    return SlImage;
}(React__default['default'].Component));
SlImage.defaultProps = {
    className: '', src: '', res: {}
};
// const SlImage: FC<SlImageProps> = ({
//   className, src, lazyLoad = false, isShowMove = false, 
//   isErrorReport = false, ...res
// }) => {
//   const [url, setUrl] = useState<string>('');
//   const [first, setFirst] = useState<boolean>(true);
//   const noImg = `${BUYIMG}/common/no-img.png?1`;
//   useDidShow(() => {
//     setUrl(src || noImg);
//   });
//   useEffect(() => {
//     setUrl(src || noImg);
//   }, [src, noImg]);
//   useEffect(() => {
//     let timer: any;
//     if (first && url.includes(noImg)) {
//       timer = setTimeout(() => {
//         setFirst(false);
//         setUrl(src || noImg);
//       }, 100);
//     }
//     return () => {
//       clearTimeout(timer);
//       timer = null;
//     };
//   }, [src, first, url, noImg]);
//   return (
//     <Fragment>
//       {
//         process.env.TARO_ENV === 'h5' ?
//           <Image
//             { ... res }
//             src={ url }
//             className={ cn(className, {
//               'hs-image-default': !url.includes(noImg) && !isShowMove,
//               'hs-image-none': url.includes(noImg) && !isShowMove
//             }) }
//           /> :
//           <Image
//             { ... res }
//             lazyLoad={ lazyLoad }
//             src={ url }
//             className={ cn(className, {
//               'hs-image-default': !url.includes(noImg),
//               'hs-image-none': url.includes(noImg)
//             }) }
//           />
//       }
//     </Fragment>
//   );
// };

var css_248z = "";
styleInject(css_248z);

var SlPrice = function () {
    return React__default['default'].createElement(components.View, { className: "sl-price-wrapper" }, "this is SlPrice");
};
var index = React.memo(SlPrice);

exports.SlImage = SlImage;
exports.SlLoading = index$2;
exports.SlPrice = index;
exports.SlUpload = index$1;
//# sourceMappingURL=index.js.map
