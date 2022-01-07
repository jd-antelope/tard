import React, { ComponentClass } from 'react'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import SlComponent from './base'

declare type OmitInputProps = Omit<
  InputProps,
  | 'className'
  | 'type'
  | 'onBlur'
  | 'onFocus'
  | 'onChange'
  | 'onConfirm'
  | 'onKeyboardHeightChange'
>

declare type InputFunction<T extends string | number, U = any, R = void> = (
  value: T,
  event?: BaseEventOrig<U>
) => R

declare type InputBaseEventDetail = {
  /** 输入值 */
  value: string | number
}

export declare type InputEventDetail = InputBaseEventDetail & {
  /** 光标位置 */
  cursor: number
  /** 键值 */
  keyCode: number
}

export declare type FocusEventDetail = InputBaseEventDetail & {
  /** 键盘高度 */
  height: number
}

export declare type BlurEventDetail = InputBaseEventDetail

export declare type ConfirmEventDetail = InputBaseEventDetail

export declare type KeyboardHeightEventDetail = {
  /** 键盘高度 */
  height: number
  /** 持续时间 */
  duration: number
}

export interface SlFieldProps extends OmitInputProps, SlComponent {
  /**
   * 输入框的唯一标识，有传入点击 title 会聚焦输入框
   */
  name?: string
  /**
   * 输入框左侧标题，若传入为空，则不显示标题
   */
  label?: string
  /**
   * 输入框类型
   * @defalut 'text'
   */
  type?: 'text' | 'number' | 'password' | 'phone' | 'idcard' | 'digit' | 'textarea'
  /**
   * 是否出现错误
   * @default false
   */
  error?: boolean
  /**
   * 错误显示文案
   * @default ''
   */
  errorMessage?: string
  /**
   * 是否显示清除按钮，需要传入 onChange 事件来改变 value
   * @default false
   */
  clear?: boolean
  /**
   * 是否显示下划线边框
   * @default true
   */
  border?: boolean
  /**
   * 是否禁止输入，禁止点击按钮
   * @default false
   */
  disabled?: boolean
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 指定 placeholder 的样式，只在小程序有效
   */
  placeholderStyle?: string
  /**
   * 指定 placeholder 的样式类，只在小程序有效
   */
  placeholderClass?: string
  /**
   * 是否可编辑
   * @default true
   */
  readonly?: boolean
  /**
   * 键盘弹起时，是否自动上推页面
   * @default false
   */
  adjustPosition?: boolean
  /**
   * 是否自动聚焦
   * @default false
   */
  autoFocus?: boolean
  /**
   * 是否自动增高 textarea适用
   * @default false
   */
  autoHeight?: boolean
  /**
   * textarea手动设计高度
   * @default false
   */
  textareaHeight?: number
  /**
   * 显示字数统计
   * @default false
   */
  showWordLimit?: boolean
  /**
   * 如果 Textarea 是在一个 position:fixed 的区域，需要显示指定属性
   * @default false
   */
  fixed?: boolean
  /**
   * 是否聚焦
   * @default false
   */
  focus?: boolean
  /**
   * 是否必填
   * @default false
   */
  required?: boolean
  /**
   * 不可填的情况内容颜色
   * @default false
   */
  contentColor?: String
  /**
   * 是否展示右侧箭头并开启点击反馈
   * @default false
   */
  isLink?: boolean
  /**
   * 是否展示右侧箭头名称
   * @default false
   */
  linkText?: string
  /**
   * 自定义右侧箭头信息
   * @default false
   */
  linkSlot?: React.ReactNode
  /**
   * 左侧title的class
   */
  labelClass?: string
  /**
   * 左侧title的宽度 
   */
  labelWidth?: number
  /**
   * 左侧title的对齐方式
   */
  labelAlign?: 'center' | 'left' | 'right'
  /**
   * 右侧value的对齐方式
   */
  valueAlign?: 'center' | 'left' | 'right'
  /**
   * 是否卡片样式
   */
   card?: boolean
   /**
   * 左侧图标
   */
   leftIcon?: string
   /**
   * 左侧图标
   */
  rightIcon?: string
   /**
   * 图标颜色
   */
  iconColor?: string
  /**
  * 图标大小
  */
  iconSize?: number
  /**
   * 输入框失去焦点时触发的事件，v2.0.3 版本可以获取 event 参数
   */
  onBlur?: InputFunction<string | number, BlurEventDetail>
  /**
   * 输入框被选中时触发的事件，v2.0.3 版本可以获取 event 参数
   */
  onFocus?: InputFunction<string | number, FocusEventDetail>
  /**
   * 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。
   * 小程序中，如果想改变 value 的值，需要 return value 从而改变输入框的当前值, v2.0.3 版本可以获取 event 参数
   */
  onChange?: InputFunction<string | number, InputEventDetail, any>
  /**
   * 点击完成按钮时触发，v2.0.3 版本可以获取 event 参数
   */
  onConfirm?: InputFunction<string | number, ConfirmEventDetail>
  /**
   * 当 editable 为 false 时，点击组件触发的事件，v2.3.3 版本可以获取 event 参数
   */
  onClick?: (event?: ITouchEvent) => void
  /**
   * 键盘高度发生变化的时候触发此事件
   */
  onKeyboardHeightChange?: (
    event?: BaseEventOrig<KeyboardHeightEventDetail>
  ) => void
  /**
   * 点击错误按钮触发的事件，v2.3.3 版本可以获取 event 参数
   */
  onErrorClick?: (event?: ITouchEvent) => void
  /**
   * 点击右侧箭头
   */
  onLink?: () => void
  /**
   * 点击左侧Icon
   */
  onLeftIconClick?: () => void
   /**
   * 点击右侧Icon
   */
  onRightIconClick?: () => void
}

declare const SlField: ComponentClass<SlFieldProps>

export default SlField
