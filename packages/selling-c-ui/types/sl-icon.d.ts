import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface SlIconProps extends AtComponent, AtIconBaseProps {
  onClick?: CommonEventFunction
}

declare const SlIcon: ComponentClass<SlIconProps>

export default SlIcon
