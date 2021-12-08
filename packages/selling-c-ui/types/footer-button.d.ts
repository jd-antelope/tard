
import SlComponent from './base'
import {ComponentClass} from "react";

export interface SlFooterButtonProps extends SlComponent {
    /**
     * 按钮名字
     * @default 按钮
     */
    name?: string
    /**
     * 点击事件
     */
    onClick?: CommonEventFunction
    /**
     * 自定义按钮内容
     */
    content?: React.ReactNode
    /**
     * 按钮颜色
     */
    color?: string
    /**
     * 填充颜色
     */
    background?: string
    /**
     * 外边框的padding
     */
    padding?: string
      /**
     * 双按钮之间的间隔巨鹿
     */
    margin?: number
    /**
     * 按钮radius
     */
    radius?: number
    /**
     * line-height
     */
    lineHeight?: number
    /**
     * 是否为双按钮
     */
    doubleBtn?: boolean
    /**
     * 第二个按钮文字
     */
    secondName?: string
    /**
     * 第二个按钮按钮颜色
     */
    secColor?: string
    /**
     * 第二个按钮填充颜色
     */
    secBackground?: string
    /**
     * 点击事件
     */
    secClick?: CommonEventFunction
    /**
     * 是否开启定位底部
     * @default false
     */
    isFixed?: boolean
}

export interface SlFooterButtonState {
}

declare const SlFooterButton: ComponentClass<SlFooterButtonProps>

export default SlFooterButton
