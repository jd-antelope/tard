import { IconProps } from "@tarojs/components/types/Icon"
import { InputHTMLAttributes, ReactElement, ReactEventHandler } from "react"

export interface SlCustomerSearchProps extends Omit<InputHTMLAttributes<HTMLElement>,"size"> {
    disabled?:boolean;
    value?: string;
    placeholder?: string;
    icon?: IconProps;
    prepand?: string |ReactElement;
    append?: string |ReactElement;
    size?: InputSize;
    defaultValue?: string;
    classProps?: string;
    verifyValue?: string;
    verifyRult?: RegExp;
    isFocus?: boolean;
    onFocus?: BaseEventOrigFunction<inputForceEventDetail>;
    onInput?: BaseEventOrigFunction<inputEventDetail>;
    onBlur?: BaseEventOrigFunction<inputValueEventDetail>;
    onConfirm?: BaseEventOrigFunction<inputValueEventDetail>;
}


export interface SlCustomerSearchState extends Omit<InputHTMLAttributes<HTMLElement>,"size"> {
    inputVal?: string,
    isFocus?: boolean;
   
}
// declare const SlCustomerSearch: SlCustomerSearchProps,

export default SlCustomerSearch
