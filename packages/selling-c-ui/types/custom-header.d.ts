export interface SlCustomHeaderProps extends SlComponent {
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
    onBack?: CommonEventFunctio,
    /**
     * 页面标题
     */
    title?: string
}

declare const SlCustomHeader: ComponentClass<SlCustomHeaderProps>

export default SlCustomHeader
