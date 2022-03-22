import { ComponentClass } from 'react'

import CompCommon, { IconBaseProps } from '../../common/type'

export interface NavBarProps extends CompCommon {
    /**
     * 标题文字
     */
    title?: string
    /**
     * 是否固定顶部
     * @default false
     */
    fixed?: boolean
    /**
     * 是否显示下划线
     * @since v1.4.0
     * @default true
     */
    border?: boolean
    /**
     * 链接文字跟图标颜色，不包括标题
     * @default #6190E8
     */
    color?: string
    /**
    * 是否显示左侧箭头
    * @default false
    */
    leftIcon?: boolean 
    /**
     * 左边图标类型，图标类型请看 Icon 文档
     * @default 'chevron-left'
     */
    leftIconType?: string | IconBaseProps
    /**
     * 左边文字
     */
    leftText?: string
    /**
     * 从右到左，第一个图标类型，图标类型请看 Icon 文档
     */
    rightIconType?: string | IconBaseProps
    /**
     * 点击左侧按钮及文字时触发
     */
    onClickLeft?: Function
    /**
     * 点击右侧按钮及文字时触发
     */
    onClickRight?: Function
}

declare const NavBar: ComponentClass<NavBarProps>

export default NavBar
