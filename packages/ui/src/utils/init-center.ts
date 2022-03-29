import Taro from '@tarojs/taro'
import { eventCenter } from './event-center'

export const initEvent = () => {
    if ((Taro as any).Current.app.eventCenter) return
    // 声明事件总线
    (Taro as any).Current.app.eventCenter = eventCenter
}