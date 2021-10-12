import { ImageProps } from '@tarojs/components/types/Image'

export interface SlImageProps extends ImageProps {
  src: string,
  className?: string,
  lazyLoad?: boolean,
  isShowMove?: boolean,
  isErrorReport?: boolean,
}