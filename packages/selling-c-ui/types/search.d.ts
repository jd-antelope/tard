import { IconProps } from "@tarojs/components/types/Icon"
import { CommonEventFunction } from '@tarojs/components/types/common'
import SlComponent from './base'

export interface SlSearchProps extends SlComponent {
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  icon?: IconProps;
  fontSize?: number | undefineds;
  width: number;
  height: number;
  onClick?: CommonEventFunction
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


export interface SlSearchState {
  /**
   * 点击提交时Input框的内容
   */
  inputVal?: string,
  /**
   * 是否显示右侧的搜索按钮
   */
  isFocus?: boolean;


}

declare const SlSearch: ComponentClass<SlSearchProps>

export default SlSearch
