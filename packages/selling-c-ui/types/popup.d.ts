import SlComponent from './base'

export interface SlPopupProps extends SlComponent {
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
export interface SlPopupState {
  _isOpened: boolean
}

declare const SlPopup: ComponentClass<SlPopupProps>

export default SlPopup

