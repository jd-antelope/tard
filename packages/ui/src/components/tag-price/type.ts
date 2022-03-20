import CompCommon from '../../common/type'

export interface TagPriceProps extends CompCommon {
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
