import CompCommon from '../../common/type'

export interface LoadingProps extends CompCommon {
  /**
   * 颜色
   */
  color?: string
  /**
   * 类型
   * @default default
   */
  type?: 'default' | 'ios' | 'loading'
  /**
   * 是否有全局定位
   */
  overlay?: boolean
  /**
   * loading大小
   */
  size?: number
  /**
   * 点击事件
   */
  onClick?: Function | null
}
