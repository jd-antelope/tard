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
  /**
   * 徽标背景颜色
   * @default 主题色
   */
  color?: string
   /**
   * 自定义内容
   */
  content?: React.ReactNode

}

declare const SlBadge: ComponentClass<SlBadgeProps>

export default SlBadge
