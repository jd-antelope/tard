
import SlComponent from './base'

export interface SlSwitchProps extends SlComponent {
  /**
   * 标签名
   */
  title?: string
  /**
   * 背景颜色
   */
  bgColor?: string
  /**
   * 背景颜色
   */
  activeColor?: string
  /**
   * 按钮颜色
   * @default
   */
  btnColor?: string
  /**
   * 背景高度
   * @default 32
   */
  bgHeight?: number
  /**
   * 背景宽度
   * @default 90
   */
  bgWidth?: number
  /**
   * 按钮宽度
   * @default 44
   */
  btnSize?: number
  /**
   * 是否显示开启
   * @default false
   */
  checked?: boolean
  /**
   * 是否禁止点击
   * @default false
   */
  disabled?: boolean
  /**
   * border-radius的大小
   * @default 19
   */
  radius?: number
  /**
   * 输入框值改变时触发的事件
   */
  onChange?: (value: boolean) => void
}

export interface SlSwitchState {
  /**
   * 是否显示开启
   * @default false
   */
  checked?: boolean
}
declare const SlSwitch: ComponentClass<SlSwitchProps>
