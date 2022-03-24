
import CompCommon from '../../common/type'

export interface DatetimePickerProps extends CompCommon {
  /**
   * 是否有开始时间和结束时间两个时间选项
   * @default false
   */
  showEndDate?: boolean
  /**
   * 打开弹窗
   * @default false
   */
  visible: boolean
  /**
   * 关闭回调
   */
  onClose?: Function
  /**
   * 确认回调
   */
  onOk?: Function
  /**
   * 是否能点击遮罩层关闭
   * @default false
   */
  closeOnclickOverlay?: boolean
  /**
   *  左侧默认提示title
   * @default '选中时间'
   */
  title?: string
  /**
   *  右侧默认提示title
   * @default '结束时间'
   */
  endTitle?: string
  /**
   *  默认开始时间
   * @default now
   */
  value?: string
  /**
   *  默认结束时间
   * @default now
   */
  endValue?: string
  /**
   * 是否展示时间
   * @default false
   */
  type?: 'date' | 'time' | 'datetime'
  /**
   * 最小时间
   * @default 1990-01-01
   */
  minDate?: string
  /**
   * 最大时间
   * @default 2025-01-01
   */
  maxDate?: string
  /**
   * 是否倒角
   * @default false
   */
  round?: boolean
}
