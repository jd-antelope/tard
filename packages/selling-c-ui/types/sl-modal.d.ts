import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import SlcComponent from './base'

export interface SlcModalProps extends SlcComponent {
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
  onClose?: CommonEventFunction
  /**
   * 点击取消按钮触发的事件
   */
  onCancel?: CommonEventFunction
  /**
   * 点击确认按钮触发的事件
   */
  onConfirm?: CommonEventFunction
}

export interface SlcModalState {
  _isOpened: boolean
  isWEB: boolean
}

export interface SlcModalActionProps extends SlcComponent {
  isSimple: boolean
}

export interface SlcModalContentProps extends SlcComponent {}

export interface SlcModalHeaderProps extends SlcComponent {}

declare const SlcModal: ComponentClass<SlcModalProps>

export default SlcModal
