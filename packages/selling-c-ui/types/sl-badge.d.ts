import { MouseEvent, ComponentClass } from 'react'

import SlComponent from './base'

export interface SlBadgeProps extends SlComponent {
  /**
   * 角标红点
   * @default false
   */
  dot?: boolean
  /**
   * 角标内容
   */
  value?: string | number
  /**
   * 角标最大值
   * @default 99
   */
  maxValue?: number
}

declare const SlBadge: ComponentClass<SlBadgeProps>

export default SlBadge
