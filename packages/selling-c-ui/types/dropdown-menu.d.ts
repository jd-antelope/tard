

import SlComponent from './base'

interface Option {
    /**
     * 文字
     */
    text: string,
    /**
     * 标识符
     */
    value: number | string
}

export interface SlDropdownMenuProps extends SlComponent {
    //  /**
    //  * 激活的 Item key
    //  */
    // activeKey?: string
    /**
     * 菜单标题和选中态颜色
     *  @default 主题色
     */
    activeColor?: string
    /**
     * 是否显示遮罩层
     * @default true
     */
    overlay?: boolean
    // /**
    //  * activeKey 变化时触发
    //  */
    // onChange?: CommonEventFunction
}

export interface SlDropdownMenuItemProps extends SlComponent {
    /**
    * 是否为当前选中项
    */
    active?: boolean
    onClick: function
    onChange?: function
    key?: number
    activeColor: string
    /**
     * 当前选中项对应的 value
     */
    value?: number | string
    /**
    * 菜单项标题
    * @default 当前选中项的文字
    */
    title?: string
    /**
     * 选项数组，text字段-文字，value字段标识符
     */
    options?: Option[]
    /**
     * 是否显示遮罩层
     * @default true
     */
    overlay?: boolean,
    /**
     * 自定义内容
     * @default true
     */
    customContent?:  React.ReactNode
}

export interface SlDropdownMenuState {
    activeKey: number
    isOpen: boolean
}

export interface SlDropdownMenuItemState {
    isActive: boolean
}
declare const SlDropdownMenu: ComponentClass<SlDropdownMenuProps>

export default SlDropdownMenu