import React from 'react'
import cn from 'classnames'
import { View, Text } from '@tarojs/components'
import Common from '../../common/common'
import { SlPriceProps, SlPriceState } from '../../../types/sl-price'

export default class SlPrice extends React.Component<SlPriceProps, SlPriceState> {
  public static defaultProps: SlPriceProps

  // 价格处理
  private filterPrice = (price) => {
    if (price instanceof Array && price.length > 1) {
      const arr = price.map(v => Number(v)).sort((a, b) => a - b)
      return `${arr[0]}-${arr[arr.length - 1]}`
    }
    return price
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { price, className, color, commissionPrice, trigger } = this.props
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
            { this.filterPrice(price) }
          </Text>
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
  color: '',
  trigger: '',
  commissionPrice: ''
}
