import CompCommon from '../../common/type'

export interface ToastProps extends CompCommon {
  /**
   * 是否展示元素
   * @default false
   */
  visible: boolean
  /**
   * 元素的内容
   */
  text?: string
  /**
   * icon 的类型
   */
  icon?: string
  /**
   * toast自定位置距离
   */
  top?: string
  /**
   * 元素展示的图片
   */
  image?: string
  /**
   * 元素的状态
   */
  status?: 'error' | 'loading' | 'success'
  /**
   * 元素持续的事件（设置为 0 将不会自动消失）
   * @default 3000
   */
  duration?: number
  /**
   * 是否存在底部遮罩层(无法点击底部的内容区)
   */
  overlay?: boolean
  /**
   * 元素被点击之后触发的事件
   */
  onClick?: Function
  /**
   * 元素被关闭之后触发的事件
   */
  onClose?: Function
}

