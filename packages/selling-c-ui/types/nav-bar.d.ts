import { CommonEventFunction } from "@tarojs/components"

export interface SlNavBarProps extends SlComponent {
    /**
     * 是否需要返回按钮
     * @default false
     */
    back?: boolean
    /**
     * 头部背景样式
     */
    bgStyle?: object,
    /**
     * 触发返回事件
     */
    onBack?: CommonEventFunction,
    /**
     * 页面标题
     */
    title?: string
}

declare const SlNavBar: ComponentClass<SlNavBarProps>

export default SlNavBar
