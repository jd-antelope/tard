

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
  /**
   * 菜单标题和选中态颜色
   *  @default 主题色
   */
  activeColor?: string,
  /**
   * 菜单标题对齐方式
   *  @default 'center'
   */
  titleAlign: 'center' | 'right' | 'left'
}

export interface SlDropdownMenuItemProps extends SlComponent {
  /**
   * 当先项是否激活，不暴露
   */
  active?: boolean
  /**
   * 点击options展开item，不暴露
   */
  onClick: function
  /**
   * 菜单标题和选项的选中态颜色，不暴露
   */
  activeColor: string
  /**
   * 菜单标题对齐方式，不暴露
   *  @default 'center'
   */
  titleAlign: 'center' | 'right' | 'left'
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
   * 所占比例
   *   @default 1
   */
  flex: 1
  /**
   * 选项数组，text字段-文字，value字段标识符
   */
  options?: Option[]
  /**
   * 自定义内容
   * @default true
   */
  content?: React.ReactNode
  /**
   * 点击options导致 value 变化时触发
   */
  onChange?: function
  /**
   * 自定义点击事件
   */
  onClick?: Function
}
export interface SlDropdownMenuState {
  /**
   * 菜单标题和选项的选中态颜色
   */
  activeKey: number
  /**
   * DropdownMenuItem是否展开
   */
  isOpen: boolean
}

declare const SlDropdownMenu: ComponentClass<SlDropdownMenuProps>

export default SlDropdownMenu