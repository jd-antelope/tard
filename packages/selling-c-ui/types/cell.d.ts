import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import SlComponent from './base'

export interface SlCellProps extends SlComponent {
  /**
   * 点击事件
   */
  onClick?: CommonEventFunction
  /**
  * 左侧标题
  */
  title?: number | string
  /**
  * 右侧内容
  */
  value?: value
  /**
  * icon图标
  */
  icon?: keyof IconProps.TIconType
  /**
  * 单元格高度
  */
  height?: number | undefined

}

declare const SlCell: ComponentClass<SlCellProps>

export default SlCell
