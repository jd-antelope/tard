

import SlComponent from './base'

export interface SlEmptyProps extends SlComponent {
    /**
     * 结果提示所需要的图片src
     */
    src?: string
    /**
     * 结果提示所需要的文案
     */
    text?: string
    /**
     *  按钮配置属性文案
     */
    btnText?: string
    /**
     *  按钮点击回调
     */
    onClick?: Function
    /**
     * 图片圆角类型 angle, circle
     */
    rect: string

}

export interface SlEmptyState {
}
declare const SlEmpty: ComponentClass<SlEmptyProps>

export default SlEmpty
