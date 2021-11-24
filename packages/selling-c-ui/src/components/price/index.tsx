import React from 'react'
import cn from 'classnames'
import { View, Text } from '@tarojs/components'
import { pxTransform } from '../../common/utils'
import Common from '../../common/common'
import { SlPriceProps, SlPriceState } from '../../../types/price'

export default class SlPrice extends React.Component<SlPriceProps, SlPriceState> {
  public static defaultProps: SlPriceProps

  private saveMax = (getPrice) => {
    const price = Number(getPrice);
    if (String(price).indexOf('.') === -1) {
      return price;
    }
    let str = ''
    str += String(price).split('.')[0];
    const floatPrice = String(price).split('.')[1];
    if (Number(floatPrice) === 0) {
      str += '';
    } else if (Number(floatPrice) < 10) {
      str += '.' + String(price).split('.')[1];
    } else {
      if (Number(floatPrice)%10 !== 0) {
        str += '.' + String(Number(floatPrice));
      } else {
        str += '.' + String(Number(floatPrice)).substr(0, 1);
      }
    }
    return str
  };

  private filterPrice = (price) => {
    const { fixedNum } = this.props
    if (fixedNum === -1) {
      return this.saveMax(price)
    }
    return Number(price).toFixed(fixedNum)
  }

  // 价格处理
  private arrayPrice = (price) => {
    if (price instanceof Array && price.length > 1) {
      const arr = price.map(v => Number(v)).sort((a, b) => a - b)
      return `${this.filterPrice(arr[0])}-${this.filterPrice(arr[arr.length - 1])}`
    }
    return this.filterPrice(price)
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { 
      price, className, color, commissionPrice, content,
      originalColor, originalPrice, type, size = 0, 
      symbolSize = 0, priceUnit, unitSize = 32
    } = this.props
    return (
      <Common className={ cn('slc-price', className) }>
        <View 
          className={
            cn('slc-price__text',{
              'slc-price__text-large': type === 'large',
              'slc-price__text-middle': type === 'largeMiddle' || type === 'smallMiddle',
              'slc-price__text-small': type === 'small' || type === 'middle',
            })
          }
          style={ (color !== '' ? `color: ${color};` : '') + (size !== 0 ? `font-size: ${pxTransform(size)}` : '') }
        >
         <Text style={ `font-size: ${pxTransform(unitSize)}` }>{priceUnit}</Text>
          <Text 
            className={
              cn('slc-price__text-content', {
                'slc-price__content-large': type === 'large',
                'slc-price__content-large-middle': type === 'largeMiddle',
                'slc-price__content-middle': type === 'middle',
                'slc-price__content-small-middle': type === 'smallMiddle',
                'slc-price__content-small': type === 'small',
              })
            }
            style={ symbolSize !== 0 ? `font-size: ${pxTransform(symbolSize)}` : '' }
          >
            { this.arrayPrice(price) }
          </Text>
          {
            originalPrice !== '' && 
            <Text 
              className="slc-price__origin-price" 
              style={ `color: ${ originalColor }` }
            >
             <Text>{priceUnit}</Text>
             { this.filterPrice(originalColor) }
            </Text>
          }
        </View>
        {
          content !== '' && content
        }
        {
          (commissionPrice !== '' && content === '') && 
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
  fixedNum: -1,
  color: '',
  content: '',
  commissionPrice: '',
  originalColor: '',
  originalPrice: '',
  type: 'middle',
  size: 0,
  symbolSize: 0,
  priceUnit:"¥",
  unitSize: 32,
}
