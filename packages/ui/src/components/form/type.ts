import CompCommon from '../../common/type'
import { CommonEvent } from '@tarojs/components/types/common'

type FormFunction = (event: CommonEvent) => void

export interface FormProps extends CompCommon {
  /**
   * 是否返回 formId 用于发送模板消息
   * @default false
   */
  reportSubmit?: boolean
  /**
   * 是否是卡片模式
   * @default false
   */
  round?: boolean
  /**
   * 是否需要border
   * @default false
   */
  border?: boolean
  /**
   * 携带 form 中的数据触发 submit 事件，由于小程序组件化的限制，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取
   */
  onSubmit?: FormFunction
  /**
   * 表单重置时会触发 reset 事件
   */
  onReset?: FormFunction
}
