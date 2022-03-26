
import React, { useEffect, useState, FC } from 'react'
import cn from 'classnames'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import {
  CommonEvent,
  ITouchEvent
} from '@tarojs/components/types/common'
import { TabProps } from './type'
import CompContainer from '../../common/comp-container'
import { cssPrefix } from '../../common'
import { isTest, uuid, mergeStyle } from '../../common/utils'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10
let timer: NodeJS.Timeout | null = null
let interval = 0
let tabHeaderRef: any = null

const Tab: FC<TabProps> = (
  {
    customStyle = '',
    tabDirection = 'horizontal',
    height = '',
    current = 0,
    swipeable = true,
    scroll = false,
    animated = true,
    tabList = [],
    onClick = () => { },
    activeColor = '#FF2929',
    color = '#666666',
    className,
    customizeStyle = '',
    children
  }
) => {
  const [scrollLeft, setScrollLeft] = useState<number>(0) //距离左边或上层控件的位置
  const [scrollTop, setScrollTop] = useState<number>(0)//距离上方或上层控件的位置
  const [touchDot] = useState<number>(0)
  const [isMoving, setIsMoving] = useState<boolean>(false)
  const [tabId] = useState<string>(isTest() ? 'tab-AUTO2021' : uuid())
  const [scrollIntoView, setScrollIntoView] = useState<string>('') //滚动的元素i

  const updateState = (idx: number): void => {
    if (scroll) {
      switch (ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
        case Taro.ENV_TYPE.SWAN: {
          const index = Math.max(idx - 1, 0)
          setScrollIntoView(`tab${tabId}${index}`)
          break
        }
        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const preTabItem = tabHeaderRef?.childNodes[index]
          preTabItem &&
            setScrollLeft(preTabItem.offsetLeft)
          setScrollTop(preTabItem.offsetTop)
        }
        default: {
          console.warn('Tab组件未适配～')
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
  const handleClick = (index: number, event: CommonEvent): void => {
    onClick(index, event)
  }

  /**
   * 
   * @param e 
   * 触摸原点事件
   * 
   */
  const handleTouchStart = (): void => {
    if (!swipeable || tabDirection === 'vertical') return
    //使用js计时器记录时间
    timer =
      setInterval(() => {
        interval++
      }, 100)

  }

  /**
   * 
   * @param e 
   * 滑动事件
   * 
   */
  const handleTouchMove = (e: ITouchEvent): void => {
    if (!swipeable || tabDirection === 'vertical') return

    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - touchDot
    const maxIndex = tabList.length

    if (
      !isMoving &&
      interval < MAX_INTERVAL &&
      touchDot > 20
    ) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        setIsMoving(true)
        handleClick(current + 1, e)

        // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        setIsMoving(true)
        handleClick(current - 1, e)
      }
    }
  }

  /**
   * 
   * 滑动结束
   * 
   */
  const handleTouchEnd = (): void => {
    if (!swipeable || tabDirection === 'vertical') return

    clearInterval(timer as NodeJS.Timeout)
    interval = 0
    setIsMoving(false)
  }

  /**
   * 
   * 获取tab元素
   * 
   */
  const getTabHeaderRef = (): void => {
    if (ENV === Taro.ENV_TYPE.WEB) {
      tabHeaderRef = document.getElementById(tabId)
    }
  }

  //   public UNSAFE_componentWillReceiveProps(nextProps: TabProps): void {
  //   if(nextProps.scroll !== scroll) {
  //   getTabHeaderRef()
  // }
  // if (nextProps.current !== current) {
  //   updateState(nextProps.current)
  // }
  //   }

  useEffect(() => {
    getTabHeaderRef()
    updateState(current)
    return () => {
      tabHeaderRef = null
    }

  }, [])



  const heightStyle = { height }
  const underlineStyle = {
    height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
    width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX',
  }

  const bodyStyle: any = {}
  let transformStyle = `translate3d(0px, -${current * 100}%, 0)`
  if (tabDirection === 'horizontal') {
    transformStyle = `translate3d(-${current * 100}%, 0, 0)`
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
      [`${cssPrefix()}-tab__item`]: true,
      [`${cssPrefix()}-tab__item--active`]: active
    })

    return (
      <View
        className={itemCls}
        id={ `tab${tabId}${idx}` }
        key={ `${cssPrefix()}-tab-item-${idx}` }
        onClick={(e) => handleClick(idx, e)}
        style={{ color: active ? activeColor : color }}
      >
        <View className={ `${cssPrefix()}-tab__item-content` }>
          <View className={ `${cssPrefix()}-tab__item-text` }>{item.title}</View>
          <View className={ `${cssPrefix()}-tab__item-underline` }
            style={{
              background: active ? activeColor : ''
            }}
          ></View>
        </View>
      </View>
    )
  })

  const rootCls = cn(
    {
      [`${cssPrefix()}-tab`]: true,
      [`${cssPrefix()}-tab--scroll`]: scroll,
      [`${cssPrefix()}-tab--${tabDirection}`]: true,
      [`${cssPrefix()}-tab--${ENV}`]: true
    },
    className
  )
  const scrollX = tabDirection === 'horizontal'
  const scrollY = tabDirection === 'vertical'

  return (
    <CompContainer customizeStyle={ customizeStyle } className={rootCls} style={mergeStyle(heightStyle, customStyle)}>
      {scroll ? (
        <ScrollView
          id={tabId}
          className={ `${cssPrefix()}-tab__header` }
          style={heightStyle}
          scrollX={scrollX}
          scrollY={scrollY}
          scrollWithAnimation
          scrollLeft={scrollLeft}
          scrollTop={scrollTop}
          scrollIntoView={scrollIntoView}
        >
          {tabItems}
        </ScrollView>
      ) : (
        <View id={tabId} className={ `${cssPrefix()}-tab__header` }>
          {tabItems}
        </View>
      )}
      <View
        className={ `${cssPrefix()}-tab__body` }
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={mergeStyle(bodyStyle, { minHeight: '1PX' })}
      >
        <View className={ `${cssPrefix()}-tab__underline` } style={underlineStyle}></View>
        {children}
      </View>
    </CompContainer>
  )
}

export default Tab


