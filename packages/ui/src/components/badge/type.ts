import CompCommon from '../../common/type'

export interface BadgeProps extends CompCommon {
    /**
     * 角标红点
     * @default false
     */
    dot?: boolean
    /**
     * 角标内容
     */
    value?: string | number
    /**
     * 角标最大值
     * @default 99
     */
    maxValue?: number
    /**
     * 徽标背景颜色
     * @default 主题色
     */
    color?: string
    /**
    * 自定义内容
    */
    content?: React.ReactNode
}

