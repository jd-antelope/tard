import { CommonEvent } from '@tarojs/components/types/common'

import CompCommon from '../../common/type'

export interface SearchBarProps extends CompCommon {
  /**
   * 输入框当前值
   * @type {string}
   * @description 必填，开发者需要通过 onChange 事件来更新 value 值
   */
  value: string
  /**
   * 输入框占位符
   * @type {string}
   */
  placeholder?: string
  /**
   * 最大输入长度
   * @type {number}
   * @default 140
   */
  maxLength?: number
  /**
   * 是否固定顶部
   * @type {boolean}
   * @default false
   */
  fixed?: boolean
  /**
  * 输入框内容对齐方式，可选值为 "right" | "center" 
  * @type {'center' | 'right'}
  * @default right
  */
  inputAlign?: "right" | "center"
  /**
  * 是否在搜索框右侧显示取消按钮
  * @type {boolean}
  * @default false
  */
  showCancel?: false
  /**
   * 取消按钮文字
   * @type {boolean}
   * @default '取消'
   */
  cancelText?: string
  /**
  * 自定义背景色
  * @type {string}
  * @default '#ffffff'
  */
  background?: string
  /**
  * 输入框形状，可选值为 "square" | "round"
  * @type {string}
  * @default 'round'
  */
  shape?: "square" | "round"
  /**
   * 是否聚焦
   * @type {boolean}
   * @default false
   */
  focus?: boolean
  /**
   * 是否禁止输入
   * @type {boolean}
   * @default false
   */
  disabled?: boolean
  /**
   * 输入框输入类型
   * @description 可选择的值 'text', 'number', 'idcard', 'digit'
   * @type {('text'|'number'|'idcard'|'digit')}
   * @default 'text'
   */
  inputType?: 'text' | 'number' | 'idcard' | 'digit'
  /**
   * 输入框值改变时触发的事件
   * @description 必填，开发者需要通过 onChange 事件来更新 value 值变化
   */
  onChange: (value: string, event: CommonEvent) => void
  /**
   * 输入框聚焦时触发
   * @description height 参数在基础库 1.9.90 起支持
   */
  onFocus?: Function
  /**
   * 输入框值失去焦点时触发的事件
   */
  onBlur?: Function
  /**
   * 点击清除按钮时触发事件
   * @description 若不传，则默认传空字符串调用 onChange 函数，Taro UI 2.0.3 起支持
   */
  onClear?: Function
  /**
   * 点击完成按钮时触发
   * @description H5 版中目前需借用 Form 组件的onSubmit事件来替代
   */
  onConfirm?: Function
  /**
   * 右侧按钮点击触发事件
   */
  onCancel?: Function
}

