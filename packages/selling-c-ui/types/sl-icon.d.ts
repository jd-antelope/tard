import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import SlComponent, { SlIconBaseProps } from './base'

export interface SlIconProps extends SlIconBaseProps, SlComponent {
  /**
   * 点击事件
   */
  onClick?: CommonEventFunction
}

declare const SlIcon: ComponentClass<SlIconProps>

export default SlIcon
