import { MouseEvent, ComponentClass } from 'react'


import SlComponent, { SlIconBaseProps } from './base'

export interface SlIconProps extends SlIconBaseProps, SlComponent {
  /**
   * 点击事件
   */
  onClick?: Function
}

declare const SlIcon: ComponentClass<SlIconProps>

export default SlIcon
