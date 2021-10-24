
import SlComponent from './base'

export interface SlTabProps extends SlComponent {
  /**
   * 
   * tab 列表
   * 
   **/
  tabList: array
  /**
   * 
   * 当前选中的tab
   * 
   **/
  current: number
  /**
   * 
   * 组件外部自定义类名
   * 
   **/

  className?: string
  /**
   * 
   * tab 的高度
   * 
   **/

  height?: string

  /**
   * 
   * 点击或滑动时触发事件
   * 
   **/
  onClick?: function

  /**
   * 
   * 
   */
  customStyle: string
  /**
   * 
   * tab 的排布方式
   * 
   */
  tabDirection: string

  /**
   * 
   * 是否滚动
   * 
   */
  scroll: boolean

  /**
   * 
   * 是否支持手势滑动切换内容页，当 tabDirection='vertical'时，无论是否设置，都不支持手势滑动切换内容页
   * 
   */
  swipeable: boolean

  /**
   * 
   * 是否开启切换动画
   * 
   */
  animated: boolean
}

export interface SlTabState {
  _scrollLeft: number, 
  _scrollTop: number,
  _scrollIntoView: string
}

