import SlComponent from './base'

export interface SlPriceProps extends SlComponent {
  /**
   * 价格
   */
  price?: string | string[]
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
}

export interface SlPriceState {
}

declare const SlPrice: ComponentClass<SlPriceProps>

export default SlPrice