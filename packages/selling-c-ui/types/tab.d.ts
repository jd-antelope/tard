
import SlComponent from './base'

export interface SlTabProps extends SlComponent {
  /**
   * tab 列表
   * @default []
   **/
  tabList: array
  /**
   * 当前选中的tab
   * @default 0
   **/
  current: number
  /**
   * tab 的高度
   **/
  height?: string

  /**
   * 点击或滑动时触发事件
   **/
  onClick?: function

  /**
   * 组件容器样式
   */
  customStyle: string
  /**
   * tab 的排布方式
   * @default 'horizontal'
   */
  tabDirection: 'horizontal' | 'vertical'
  /**
   * 是否滚动
   * @default false
   */
  scroll: boolean

  /**
   * 是否支持手势滑动切换内容页，当 tabDirection='vertical'时，无论是否设置，都不支持手势滑动切换内容页
   * @default true
   */
  swipeable: boolean

  /**
   * 是否开启切换动画
   * @default true    
   */
  animated: boolean

  /**
   * 自定义选中标签的颜色
   * @default '#FF2929'
   */
  activeColor?: string

  /**
   * 默认标签颜色
   * @default '#666666'
   */
  color?: string
}

export interface SlTabState {
  /**
   * 距离左边或上层控件的位置
   */
  _scrollLeft: number, 
  /**
   * 距离上方或上层控件的位置
   */
  _scrollTop: number,
  /**
   * 滚动的元素id
   */
  _scrollIntoView: string
}
declare const SlTab: ComponentClass<SlTabProps>

export default SlTab

