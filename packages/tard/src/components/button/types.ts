export type SlButtonProps = {
  className: string,
  /**
   *按钮类型
   * @defalt default
   */
  type?: string
  /**
   * 是否填充背景
   * @default false
   */
  fill?: boolean
  /**
   * 自动充满父容器
   * @default false
   */
  full?: boolean
  /**
   * 按钮尺寸大小
   */
  size?: string
  /**
   * 是否圆角
   * @default normal
   */
  round?: string
  /**
   * 按钮颜色
   */
  color?: string
  /**
  * 按钮填充颜色
  */
  fillColor?: string
  /**
  * 是否使用边框
  */
  border?: boolean
  /**
  * 边框颜色
  */
  borderColor?: string
  /**
   * 按钮自定义圆角
   */
  radius?: number
  /**
   * 自定义样式对象
   */
  customStyle?: object
  /**
   * 设置按钮为禁用态（不可点击）
   */
  disabled?: boolean
  /**
   * 点击按钮时触发
   */
  onClick?: Function
}

export type SlButtonState = {
  isWEB: boolean
  isWEAPP: boolean
}
