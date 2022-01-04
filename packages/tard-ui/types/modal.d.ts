import { ComponentClass } from 'react'


import SlComponent from './base'

export interface SlModalProps extends SlComponent {
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 是否显示模态框
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的内容
   */
  content?: string
  /**
   * 元素的内容对齐方式
   * @default center
   */
  contentAlign?: 'center' | 'left' | 'right'
  /**
   * 点击浮层的时候时候自动关闭
   * @default true
   */
  closeOnClickOverlay?: boolean
  /**
   * 取消按钮的文本
   */
  cancelText?: string
  /**
   * 确认按钮的文本
   */
  confirmText?: string
  /**
   * 触发关闭时的事件
   */
  onClose?: Function
  /**
   * 点击取消按钮触发的事件
   */
  onCancel?: Function
  /**
   * 点击确认按钮触发的事件
   */
  onConfirm?: Function
}

export interface SlModalState {
  _isOpened: boolean
  isWEB: boolean
}

export interface SlModalActionProps extends SlComponent {
  isSimple: boolean
}

export interface SlModalContentProps extends SlComponent { }

export interface SlModalHeaderProps extends SlComponent { }

declare const SlModal: ComponentClass<SlModalProps>

export declare const SlModalHeader: ComponentClass;

export declare const SlModalAction: ComponentClass;

export declare const SlModalContent: ComponentClass;

export default SlModal
