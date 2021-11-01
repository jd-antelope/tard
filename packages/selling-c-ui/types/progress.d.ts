
import SlComponent from './base'

export interface SlProgressProps extends SlComponent {
  /**
   * 进度条类型 line or circle
   */
  type?: string
  /**
   * 元素的颜色
   */
  color?: string
  /**
   * 当type为circle时需要指定圆形半径，不需要单位
   */
  radius?: number
  /**
   * 元素的状态
   */
  status?: 'progress' | 'error' | 'success'
  /**
   * 元素的进度
   */
  percent?: number
  /**
   * 元素的规格
   */
  strokeWidth?: number
  /**
   * 是否隐藏文字
   */
  isHidePercent?: boolean
}

export interface SlProgressState {
}
declare const SlProgress: ComponentClass<SlProgressProps>
export default SlProgress
