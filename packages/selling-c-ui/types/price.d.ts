import SlComponent from './base'

export interface SlPriceProps extends SlComponent {
  /**
   * 价格
   */
  price?: string | string[]
  /**
   * 原价
   */
  originalPrice?: string
  /**
   * 原价颜色
   */
  originalColor?: string
  /**
   * 颜色
   */
  color?: string
  /**
   * 价格后面的内容
   */
  trigger?: React.ReactNode,
  /**
   * 是否展示佣金
   */
  commissionPrice?: string
  /**
   * 保留几位小数点
   */
  fixedNum?: number
  /**
   * 类型
   */
  type?: Size | string
  /**
   * 大小
   */
  size?: number
  /**
   * 大小
   */
  symbolSize?: number
}

enum Size {
  small = 'small',  // 24 + 24
  smallMiddle = 'smallMiddle', // 28 + 28
  middle = 'middle', // 24 + 36
  largeMiddle = 'largeMiddle', // 28 + 48
  large = 'large',  // 36 + 60
}

export interface SlPriceState {
}

declare const SlPrice: ComponentClass<SlPriceProps>

export default SlPrice