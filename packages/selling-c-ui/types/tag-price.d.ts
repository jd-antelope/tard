
import SlComponent from './base'

export interface SlTagPriceProps extends SlComponent {
  /**
   * 价格标签颜色
   * @default: '#FF2929'
   */
  color?: string;
  /**
   * 价格标签title
   * @default: '渠道奖励'
   */
  title: string;
  /**
   * 价格
   */
  price: string;
}

export interface SlTagPriceState {
}
declare const SlTagPrice: ComponentClass<SlTagPriceProps>
