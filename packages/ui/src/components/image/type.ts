import CompCommon from '../../common/type'
import { ImageProps as ImagePropsBase } from '@tarojs/components/types/Image'

export interface ImageProps extends ImagePropsBase, CompCommon {
  /**
   * 图片链接
   */
  src: string,
  /**
   * 自定义失败内容
   */
  errorContent?: string,
  /**
   * 是否支持全屏预览图片
   * @default false
   */
  preview?: boolean,
  /**
   * 图片其他参数
   */
  res?: any,
  /**
   * 是否展示动画
   * @default true
   */
  transition?: boolean
  /**
   * 圆角大小，默认单位为px
   * @default 0
   */
  radius?: number
  /**
   * 是否显示为圆形
   * @default false
   */
  round?: false
  /**
   * 是否展示图片加载中提示
   * @default true
   */
  showLoading?: boolean
  /**
   * 自定义加载内容
   */
  loadingContent?: string,
}