import { ComponentClass } from 'react'
import SlComponent from './base'

export interface SlSkeletonProps extends SlComponent {
  /**
   * 宽
   */
  width?: number
  /**
   * 高
   */
  height?: number
  /**
   * 外盒子高度
   */
  boxheight?: number
  /**
   * 圆角类型
   */
  type?: Type | string
}

enum Type {
  default = 'default',
  /**
   * 圆角
   */
  rounded = 'rounded',
  /**
   * 直角
   */
  squared = 'squared'
}

declare const SlSkeleton: ComponentClass<SlSkeletonProps>

export default SlSkeleton
