'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var components = require('@tarojs/components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var css_248z = ".aaa {\n  background: red;\n  display: flex;\n  font-size: 24px;\n  height: 200px;\n  line-height: 100;\n}\n";
styleInject(css_248z);

var SlLoading = function () {
    return (React__default['default'].createElement(components.View, { className: "aaa" }, "99999999999"));
};
var index = React.memo(SlLoading);

exports.SlLoading = index;
//# sourceMappingURL=index.js.map
