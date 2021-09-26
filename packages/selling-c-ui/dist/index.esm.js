import React, { memo } from 'react';
import { View } from '@tarojs/components';

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

var css_248z$1 = ".aaa {\n  background: red;\n  display: flex;\n  font-size: 24px;\n  line-height: 150;\n  height: 200px;\n}\n";
styleInject(css_248z$1);

var SlLoading = function () {
    return (React.createElement(View, { className: "aaa" }, "fff"));
};
var index$1 = memo(SlLoading);

var css_248z = "";
styleInject(css_248z);

var SlUpload = function () {
    return React.createElement(View, { className: "sl-upload-wrapper" }, "aaaa ll");
};
var index = memo(SlUpload);

export { index$1 as SlLoading, index as SlUpload };
//# sourceMappingURL=index.esm.js.map
