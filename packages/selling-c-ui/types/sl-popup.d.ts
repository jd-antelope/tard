
export interface SlPopupProps{
  //组件标题
  title?: string
  //组件是否显示
  isOpened: boolean
  //组件外部自定义类名
  className: string
  //组件关闭回调
  onClose: Function
}
export interface SlPopupState {
  _isOpened: boolean
}

declare const SlPopup: ComponentClass<SlPopupProps>

export default SlPopup

