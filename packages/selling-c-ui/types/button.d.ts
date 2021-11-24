
import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { ButtonProps } from '@tarojs/components/types/Button'
import SlComponent from './base'

type TaroButtonProps = Pick<ButtonProps, 'formType' | 'openType' |
  'lang' | 'sessionFrom' | 'sendMessageTitle' | 'sendMessagePath' |
  'sendMessageImg' | 'showMessageCard' | 'appParameter' | 'onContact' |
  'onGetUserInfo' | 'onGetPhoneNumber' | 'onOpenSetting' | 'onError'>


export interface SlButtonProps extends TaroButtonProps, SlComponent {
  /**
   * 是否填充背景
   * @default false
   */
  fill?: boolean
  /**
   * 自动充满父容器
   * @default false
   */
  full?: boolean
  /**
   * 按钮尺寸大小
   */
  size?: string
  /**
   * 按钮颜色
   */
  color?: string
  /**
  * 按钮填充颜色
  */
  fillColor?: string
    /**
  * 边框颜色
  */
   borderColor?: string
  /**
   * 按钮自定义圆角
   */
  radius?: number
  /**
   * 设置按钮为禁用态（不可点击）
   */
  disabled?: boolean
  /**
   * 点击按钮时触发
   */
  onClick?: CommonEventFunction
}


export interface SlButtonState {
  isWEB: boolean
  isWEAPP: boolean
}

declare const SlButton: ComponentClass<SlButtonProps>

export default SlButton
