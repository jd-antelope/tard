import { ComponentClass } from 'react'
import SlComponent from './base'
import { CommonEventFunction } from '@tarojs/components/types/common'

export interface SlLoadingProps extends SlComponent {
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
  onClick?: CommonEventFunction
}

declare const SlLoading: ComponentClass<SlLoadingProps>

export default SlLoading
