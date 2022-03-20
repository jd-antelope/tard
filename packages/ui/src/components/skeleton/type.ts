import CompCommon from '../../common/type'

export interface SkeletonProps extends CompCommon {
  /**
   * 宽
   */
  width?: number
  /**
   * 高
   */
  height?: number
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
