
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
  title?: string;
  /**
   * 价格
   */
  price: string;
  /**
   * 字体大小
   * @default 24
   */
  size?: number;
}

export interface SlTagPriceState {}
declare const SlTagPrice: ComponentClass<SlTagPriceProps>

export default SlTagPrice
