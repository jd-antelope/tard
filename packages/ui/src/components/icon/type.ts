import CompCommon, { IconBaseProps } from '../../common/type'

export interface IconProps extends IconBaseProps, CompCommon {
  /**
   * 点击事件
   */
  onClick?: Function
}
