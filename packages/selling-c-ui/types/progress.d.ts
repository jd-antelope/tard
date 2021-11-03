
import SlComponent from './base'

export interface SlProgressProps extends SlComponent {
  /**
   * 进度百分比
   * @default 0
   */
  percent: number
  /**
   * 进度条粗细
   * @default 4px
   */
  strokeWidth: number
  /**
   * 进度条颜色
   * @default #DC8D20
   */
  color: string
  /**
   * 轨道颜色
   * @default #EFEFEF
   */
  trackColor: string
  /**
   * 进度文字内容
   * @default 百分比
   */
  pivotText?: string
  /**
   * 是否显示进度文字
   * @default true
   */
  showPivot: boolean
  /**
   * 进度条状态
   */
  status?: 'progress' | 'error' | 'success'
}

declare const SlProgress: ComponentClass<SlProgressProps>
export default SlProgress
