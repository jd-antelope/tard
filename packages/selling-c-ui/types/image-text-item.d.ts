import SlComponent from './base'
import { ImageProps } from '@tarojs/components/types/Image'
import SlComponent from './base'

export interface SlImageTextItemProps extends ImageProps, SlComponent {
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
  propsData?: Array,
}

declare const SlImageTextItemProps: ComponentClass<SlImageProps>

export default SlImageTextItemProps