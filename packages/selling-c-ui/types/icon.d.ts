import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import SlComponent, { SlIconBaseProps } from './base'

export interface SlIconProps extends SlComponent, SlIconBaseProps {
  onClick?: CommonEventFunction
}

declare const SlIcon: ComponentClass<SlIconProps>

export default SlIcon
