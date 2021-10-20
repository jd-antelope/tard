
import SlComponent from './base'

export interface SlCanvasProps extends SlComponent {
  /**
   * 宽度
   */
  width?: number
  /**
   * 高度
   */
  height?: number
  /**
   * 是否打开
   */
  isOpen: boolean
  /**
   * 关闭回调
   */
  onClose: Function
  /**
   * 内容方法
   */
  contentCallback?: Function
}

export interface SlCanvasState {
  open: boolean
}

declare const SlCanvas: ComponentClass<SlCanvasProps>

export default SlCanvas