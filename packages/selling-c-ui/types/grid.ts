import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import SlComponent from './base'

export interface SlGridProps extends SlComponent {
  /**
  * 图片链接
  */
  src?: string,
  /**
  * 文字
  */
  tetx?: string,
  /**
  * 图文位置
  */
  isUp?: boolean,
  /**
  * 点击事件
  */
  onClick?: CommonEventFunction,
  /**
  * 父级传递数据
  */
  propsData?: Array<any>,
}

declare const SlGrid: ComponentClass<SlGridProps>

export default SlGrid