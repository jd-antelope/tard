import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import SlComponent from './base'

export interface SlCellProps extends SlComponent {
  /**
  * 左侧标题
  */
  title?: number | string
  /**
  * 右侧内容
  */
  value?: number | string
  /**
  * 标题下方的描述信息
  */
  label?: number | string
  /**
  * 是否展示右侧箭头并开启点击反馈
  * @default false
  */
  isLink?: boolean
  /**
  * 是否显示内边框
  * @default true
  */
  border?: boolean
  /**
  * 是否使内容垂直居中
  * @default false
  */
  center?: boolean
  /**
  * 左侧图标名称或图片链接
  */
  icon?: string
  /**
   * 箭头方向，可选值为 left up down
   * @default 'right'
   */
  arrowDirection?: 'left' | 'up' | 'down' | 'right'
  /**
   * 自定义单元格左侧内容
   */
  leftContent?: React.ReactNode
  /**
  * 自定义单元格右侧内容
  */
  rightContent?: React.ReactNode
  /**
  * 点击事件
  */
  onClick?: CommonEventFunction

}

export interface SlCellGroupProps extends SlComponent {
  /**
  * 分组标题
  */
  title?: number | string
  /**
  * 是否显示内边框
  * @default true
  */
  border?: boolean
  /**
  * 是否卡片风格
  * @default false
  */
  inset: boolean
}

declare const SlCell: ComponentClass<SlCellProps>

export default SlCell
