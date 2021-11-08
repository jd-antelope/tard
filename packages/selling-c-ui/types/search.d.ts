import { IconProps } from "@tarojs/components/types/Icon"

import SlComponent from './base'

export interface SlSearchProps extends SlComponent {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    icon?: IconProps;
    fontSize?: string;
    width: number;
    height: number;
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
