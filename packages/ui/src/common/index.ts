import Taro from '@tarojs/taro'

export const CssPrefix = 'tard'

export const cssPrefix = () => {
  return (Taro as any).Current.app?.cssPrefix || 'tard'
}
 