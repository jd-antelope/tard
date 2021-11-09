
import React from 'react'
import cn from 'classnames'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { 
  CommonEvent, 
  ITouchEvent 
} from '@tarojs/components/types/common'
// import Common from '../../common/common'
import { SlTabProps, SlTabState } from '../../../types/tab'
import { isTest, uuid, mergeStyle } from '../../common/utils'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

export default class SlTab extends React.Component<SlTabProps, SlTabState> {
  public static defaultProps: SlTabProps

  private _tabId: string
  private _touchDot: number  //触摸点
  private _timer: NodeJS.Timeout | null  //定时器
  private _interval: number  //滑动时间间隔
  private _isMoving: boolean  //是否在滑动
  private tabHeaderRef: any
  static SlTab: { tabList: never[]; current: number; className: string }

  /**
   * 
   * 构造函数
   * 
  */
  public constructor(props: SlTabProps) {
    super(props)
    this.state = {
      _scrollLeft: 0, //距离左边或上层控件的位置
      _scrollTop: 0,  //距离上方或上层控件的位置
      _scrollIntoView: '' //滚动的元素id
    }
    this._tabId = isTest() ? 'tab-AUTO2021': uuid()
    this._touchDot = 0
    this._timer = null
    this._interval = 0
    this._isMoving = false
  }

  /**
   * 
   * 
   */

  private updateState = (idx: number): void => {
    if(this.props.scroll) {
      switch(ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
        case Taro.ENV_TYPE.SWAN: {
          const index = Math.max(idx - 1, 0)
          this.setState({
            _scrollIntoView: `tab${this._tabId}${index}`
          })
          break
        }
        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const preTabItem = this.tabHeaderRef.childNodes[index]
          preTabItem && 
          this.setState({
            _scrollTop: preTabItem.offsetTop,
            _scrollLeft: preTabItem.offsetLeft
          })
        }
        default: {
          console.warn('SlTab组件未适配～')
          break
        }
      }
    }
  }

  /**
   * 
   * @param index 
   * @param event 
   * tab 切换事件
   * 
   */
  private handleClick(index: number, event: CommonEvent): void {
    this.props.onClick(index, event)
  }

  /**
   * 
   * @param e 
   * 触摸原点事件
   * 
   */
  private handleTouchStart(e: ITouchEvent): void {
    const { swipeable, tabDirection } = this.props
    if(!swipeable || tabDirection === 'vertical') return
    // 获取触摸时的原点
    this._touchDot= e.touches[0].pageX
    //使用js计时器记录时间
    this._timer = setInterval(() => {
      this._interval++
    }, 100)
  }

  /**
   * 
   * @param e 
   * 滑动事件
   * 
   */
  private handleTouchMove(e: ITouchEvent): void {
    const { swipeable, tabDirection, current, tabList } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - this._touchDot
    const maxIndex = tabList.length

    if (
      !this._isMoving &&
      this._interval < MAX_INTERVAL &&
      this._touchDot > 20
    ) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current + 1, e)

        // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current - 1, e)
      }
    }
  }

  /**
   * 
   * 滑动结束
   * 
   */
  private handleTouchEnd(): void {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    clearInterval(this._timer as NodeJS.Timeout)
    this._interval = 0
    this._isMoving = false
  }

  /**
   * 
   * 获取tab元素
   * 
   */
  private getTabHeaderRef(): void {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId)
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlTabProps): void {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef()
    }
    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current)
    }
  }
  
  public componentDidMount(): void {
    this.getTabHeaderRef()
    this.updateState(this.props.current)
  }

  public componentWillUnmount(): void {
    this.tabHeaderRef = null
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {

    const {
      customStyle = '',
      className,
      activeColor,
      height,
      tabDirection,
      animated,
      tabList,
      scroll,
      current,
      color
    } = this.props

    const { _scrollLeft, _scrollTop, _scrollIntoView } = this.state

    const heightStyle = { height }
    const underlineStyle = {
      height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
      width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX',
    }

    const bodyStyle: React.CSSProperties = {}
    let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
    if (tabDirection === 'horizontal') {
      transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
    }
    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle
    })
    if (!animated) {
      bodyStyle.transition = 'unset'
    }

    const tabItems = tabList.map((item, idx) => {
      const active = current === idx
      const itemCls = cn({
        'slc-tab__item': true,
        'slc-tab__item--active': active
      })

      return (
        <View
          className={itemCls}
          id={`tab${this._tabId}${idx}`}
          key={`slc-tab-item-${idx}`}
          onClick={this.handleClick.bind(this, idx)}
          style={{ color: active ? activeColor: color }}
        >
          <View className="slc-tab__item-content">
            <View className="slc-tab__item-text">{item.title}</View>
            <View className='slc-tab__item-underline' 
              style={{
                background: active ? activeColor: '' 
              }}
            ></View>
          </View>
        </View>
      )
    })

    const rootCls = cn(
      {
        'slc-tab': true,
        'slc-tab--scroll': scroll,
        [`slc-tab--${tabDirection}`]: true,
        [`slc-tab--${ENV}`]: true
      },
      className
    )
    const scrollX = tabDirection === 'horizontal'
    const scrollY = tabDirection === 'vertical'

    return (
      <View className={rootCls} style={mergeStyle(heightStyle, customStyle)}>
        {scroll ? (
          <ScrollView
            id={this._tabId}
            className='slc-tab__header'
            style={heightStyle}
            scrollX={scrollX}
            scrollY={scrollY}
            scrollWithAnimation
            scrollLeft={_scrollLeft}
            scrollTop={_scrollTop}
            scrollIntoView={_scrollIntoView}
          >
            {tabItems}
          </ScrollView>
        ) : (
          <View id={this._tabId} className='slc-tab__header'>
            {tabItems}
          </View>
        )}
        <View
          className='slc-tab__body'
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          onTouchMove={this.handleTouchMove.bind(this)}
          style={mergeStyle(bodyStyle, {minHeight: '1PX'})}
        >
          <View className='slc-tab__underline' style={underlineStyle}></View>
          {this.props.children}
        </View>
      </View>
    )
  }
}

SlTab.defaultProps = {
  customStyle: '',
  tabDirection: 'horizontal',
  height: '64px',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {},
  activeColor: '#FF2929',
  color:'#666666'
}
