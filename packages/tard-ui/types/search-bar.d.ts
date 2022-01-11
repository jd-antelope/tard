import { IconProps } from "@tarojs/components/types/Icon"

import SlComponent from './base'

export interface SlSearchBarProps extends SlComponent {
  /**
  *  是否禁止输入
  */
  disabled?: boolean;
  /**
  *  判断是否聚焦
  */
  value?: string;
  /**
  *  占位符
  */
  placeholder?: string;
  /**
  *  文字大小
  */
  fontSize?: number | undefineds;
   /**
  *  背景颜色
  */
  backgroundColor?: string
  /**
  *  圆角大小
  */
  borderRadius?: number;
  /**
  *  搜索框的宽带
  */
  width?: number;
  /**
  *  搜索框的高度
  */
  height?: number;
  /**
  *  点击事件
  */
  onClick?: Function
  /**
  *  判断是否聚焦
  */
  isFocus?: boolean;
  /**
  *  输入框聚焦时触发
  */
  onFocus?: BaseEventOrigFunction<inputForceEventDetail>;
  /**
  *  当键盘输入时触发
  */
  onInput?: BaseEventOrigFunction<inputEventDetail>;
  /**
  *  输入框失去焦点时触发
  */
  onBlur?: BaseEventOrigFunction<inputValueEventDetail>;
  /**
  *  点击完成按钮时触发
  */
  onConfirm?: BaseEventOrigFunction<inputValueEventDetail>;
  /**
 *  点击时是否跳转页面
 */
  isSkip?: boolean;
}


export interface SlSearchBarState {
  /**
   * 点击提交时Input框的内容
   */
  inputVal?: string,
  /**
   * 是否显示右侧的搜索按钮
   */
  isFocus?: boolean;


}

declare const SlSearchBar: ComponentClass<SlSearchBarProps>

export default SlSearchBar
