
import SlComponent from './base'

export interface SlProgressCircleProps extends SlComponent {
    /**
    * 百分比
    * @default 0
    */
    percent: number
    /**
     * 圆环直径，单位为px
     * @default 100
     */
    size: number
    /**
     * 进度条颜色
     *  @default #DC8D20
     */
    color: string
    /**
     * 轨道背景颜色
     *  @default #EFEFEF
     */
    layerColor: string
    /**
     * 文字
     */
    text?: string
    /**
     * 进度条宽度，单位为px
     * @default 4
     */
    strokeWidth: number
}

declare const SlProgressCircle: ComponentClass<SlProgressCircleProps>
