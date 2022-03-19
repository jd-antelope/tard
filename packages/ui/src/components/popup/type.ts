import CompCommon from '../../common/type'

export interface PopupProps extends CompCommon {
  /**
   * 组件标题
   */
  title?: string
  /**
   * 是否允许外部点击关闭
   *  @default false
   */
  closeOnclickOverlay?: boolean
  /**
   * 头部标题的对齐方式
   * @default center
   */
  titleAlign?: string
  /**
   * 组件是否显示
   */
  visible: boolean
  /**
   * 组件关闭回调
   * @default false
   */
  onClose?: Function

}
