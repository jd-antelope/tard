import SlComponent from './base'
import { ImageProps } from '@tarojs/components/types/Image'

export interface SlImageProps extends ImageProps, SlComponent {
  /**
   * 图片链接
   */
  src: string,
  /**
   * 图片其他参数
   */
  res?: any,
  /**
   * 是否展示动画
   */
  transition?: boolean
}

export interface SlImageState {
  url: string, 
  noImg: string
}

declare const SlImage: ComponentClass<SlImageProps>

export default SlImage