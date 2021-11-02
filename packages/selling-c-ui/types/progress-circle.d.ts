
import SlComponent from './base'

export interface SlProgressCircleProps extends SlComponent {
    /**
    * 百分比
    * @default 0
    */
    percent: number
    /**
     * 圆环直径，H5默认单位为px，小程序为rpx
     * @default 100
     */
    size: number
    /**
     * 进度条颜色
     *  @default #DC8D20
     */
    color: string
    /**
     * 轨道颜色
     *  @default #EFEFEF
     */
    layerColor: string
    /**
     * 文字
     */
    text?: string
    /**
     * 进度条宽度，H5默认单位为px，小程序为rpx
     * @default 4
     */
    strokeWidth: number
}

export interface SlProgressCircleState {
}
declare const SlProgressCircle: ComponentClass<SlProgressCircleProps>
