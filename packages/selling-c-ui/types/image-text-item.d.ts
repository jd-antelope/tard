import SlComponent from './base'
import { ImageProps } from '@tarojs/components/types/Image'

export interface SlImageTextItemProps extends ImageProps, SlComponent {
  /**
   * 图片链接
   */
  src?: string,
  /**
   * 图片其他参数
   */
  res?: any,
  /**
   * 是否展示动画
   */
  isTransition?: boolean,
  data?:any,
  tetx?:string,
 
}

export interface SlImageTextItemState {
  id: string, 
}

declare const SlImageTextItemProps: ComponentClass<SlImageProps>

export default SlImageTextItemProps