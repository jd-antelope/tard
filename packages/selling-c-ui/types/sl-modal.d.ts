import { ComponentClass } from 'react';
import { CommonEventFunction } from '@tarojs/components/types/common';

import SlComponent from './base';

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

export interface SlModalState {
  _isOpened: boolean
  isWEB: boolean
}

export interface SlModalActionProps extends SlComponent {
  isSimple: boolean
}

export type SlModalContentProps = SlComponent

export type SlModalHeaderProps = SlComponent

declare const SlModal: ComponentClass<SlModalProps>;

export default SlModal;
