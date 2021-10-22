import React from 'react'
import cn from 'classnames'
import { View, Text } from '@tarojs/components'
import Common from '../../common/common'
import { SlPriceProps, SlPriceState } from '../../../types/sl-price'

export default class SlPrice extends React.Component<SlPriceProps, SlPriceState> {
  public static defaultProps: SlPriceProps

  // 价格处理
  private arrayPrice = (price) => {
    const { fixedNum } = this.props
    if (price instanceof Array && price.length > 1) {
      const arr = price.map(v => Number(v)).sort((a, b) => a - b)
      return `${Number(arr[0]).toFixed(fixedNum)}-${Number(arr[arr.length - 1]).toFixed(fixedNum)}`
    }
    return Number(price).toFixed(fixedNum)
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { 
      price, className, color, commissionPrice, trigger,
      originalColor, originalPrice, fixedNum
    } = this.props
    return (
      <Common className={ cn('slc-price', className) }>
        <View 
          className="slc-price__text"
          style={ color !== '' ? `color: ${color}` : '' }
        >
          ¥
          <Text 
            className="slc-price__text-content"
          >
            { this.arrayPrice(price) }
          </Text>
          {
            originalPrice !== '' && 
            <Text 
              className="slc-price__origin-price" 
              style={ `color: ${ originalColor }` }
            >
              ¥{ Number(originalPrice).toFixed(fixedNum) }
            </Text>
          }
        </View>
        {
          trigger !== '' && trigger
        }
        {
          (commissionPrice !== '' && trigger === '') && 
          <View className="slc-price__commission">
            <View className="slc-price__commission--box">
              佣金 { commissionPrice }
            </View>
          </View>
        }
      </Common>
    )
  }
}

SlPrice.defaultProps = {
  className: '',
  price: '',
  fixedNum: 2,
  color: '',
  trigger: '',
  commissionPrice: '',
  originalColor: '',
  originalPrice: ''
}
