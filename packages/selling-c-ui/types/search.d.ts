import { IconProps } from "@tarojs/components/types/Icon"
import { InputHTMLAttributes, ReactElement, ReactEventHandler } from "react"

export interface SlSearchProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    icon?: IconProps;
    fontSize?: string;
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


export interface SlSearchState extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
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
