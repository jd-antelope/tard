import { ImageProps } from '@tarojs/components/types/Image'

export interface SlImageProps extends ImageProps {
  src: string,
  className?: string,
  res?: any
}

export interface SlImageState {
  url: string, 
  noImg: string
}

declare const SlImage: ComponentClass<SlImageProps>

export default SlImage