'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

const React = require('react')
const components = require('@tarojs/components')

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e } }

const React__default = /* #__PURE__ */_interopDefaultLegacy(React)

function styleInject (css, ref) {
  if (ref === void 0) ref = {}
  const insertAt = ref.insertAt

  if (!css || typeof document === 'undefined') { return }

  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.type = 'text/css'

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.appendChild(style)
    }
  } else {
    head.appendChild(style)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}

const css_248z = '.aaa {\n  background: red;\n  display: flex;\n  font-size: 24px;\n  height: 200px;\n}\n'
styleInject(css_248z)

const SlLoading = function () {
  return (React__default.default.createElement(components.View, { className: 'aaa' }, '10000'))
}
const index = React.memo(SlLoading)

exports.SlLoading = index
// # sourceMappingURL=index.js.map
