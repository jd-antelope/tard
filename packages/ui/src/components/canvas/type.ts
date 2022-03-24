
import CompCommon from '../../common/type'

export interface CanvasProps extends CompCommon {
  /**
   * canvas唯一标识
   */
  id?: string
  /**
   * 宽度
   */
  width?: number
  /**
   * 高度
   */
  height?: number
  /**
   * 是否有遮照
   */
  overlay?: boolean
  /**
   * 是否打开
   */
  visible: boolean
  /**
   * 关闭回调
   */
  onClose?: Function
  /**
   * 内容方法
   * @param ctx canvas实例
   * @param dpr 数字计算
   */
  contentCallback?: (ctx, dpr) => void
}
