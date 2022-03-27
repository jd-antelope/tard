import React, { Fragment, FC } from 'react'
import cn from 'classnames'
import { View, Text } from '@tarojs/components'
import { pxTransform } from '../../utils'
import CompContainer from '../../common/comp-container'
import { cssPrefix } from '../../common'
import { PriceProps } from './type'

const Price: FC<PriceProps> = ({ 
  className = '',
  price = '',
  fixedNum = -1,
  color = '',
  afterContent = '',
  beforeContent = '',
  commissionPrice = '',
  originColor = '',
  originPrice = '',
  type = 'middle',
  size = 0,
  symbolSize = 0,
  showAfterSymbol = false,
  priceUnit = '¥',
  unitSize = 0,
  thousands = false,
  customizeStyle = ''
}) => {
  const CssPrefix = cssPrefix()
  const saveMax = (getPrice) => {
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

  const filterPrice = (price) => {
    if (fixedNum === -1) {
      return thousands ? thousandsFilter(saveMax(price)) : saveMax(price)
    }
    return thousands ? thousandsFilter(Number(price).toFixed(fixedNum)) : Number(price).toFixed(fixedNum)
  }

  // 千分位处理
  const thousandsFilter = (price) => {
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    const returnPrice = String(price).replace(/^(\d+)((\.\d+)?)$/, (_, s1, s2) => s1.replace(reg, '$&,') + s2)
    return returnPrice
  }

  // 价格处理
  const arrayPrice = (price) => {
    if (price instanceof Array && price.length > 1) {
      const arr = price.map(v => Number(v)).sort((a, b) => a - b)
      return (
        <Fragment>
          <Text 
            className={
              cn(`${CssPrefix}-price__text-content`, {
                [`${CssPrefix}-price__content-large`]: type === 'large',
                [`${CssPrefix}-price__content-large-middle`]: type === 'largeMiddle',
                [`${CssPrefix}-price__content-middle`]: type === 'middle',
                [`${CssPrefix}-price__content-small-middle`]: type === 'smallMiddle',
                [`${CssPrefix}-price__content-small`]: type === 'small',
              })
            }
            style={ symbolSize !== 0 ? `font-size: ${pxTransform(symbolSize)}` : '' }
          >
            { String(filterPrice(arr[0])).split('.')[0] }
          </Text>
          { String(filterPrice(arr[0])).split('.')[1] ? '.' + String(filterPrice(arr[0])).split('.')[1] : '' }
          <Text className={ `${CssPrefix}-price__text-line` }>-</Text>
          {
            showAfterSymbol && <Text style={ unitSize === 0 ? '': `font-size: ${pxTransform(unitSize)}` }>{priceUnit}</Text>
          }
          <Text
            className={
              cn(`${CssPrefix}-price__text-content`, {
                [`${CssPrefix}-price__content-large`]: type === 'large',
                [`${CssPrefix}-price__content-large-middle`]: type === 'largeMiddle',
                [`${CssPrefix}-price__content-middle`]: type === 'middle',
                [`${CssPrefix}-price__content-small-middle`]: type === 'smallMiddle',
                [`${CssPrefix}-price__content-small`]: type === 'small',
              })
            }
            style={ symbolSize !== 0 ? `font-size: ${pxTransform(symbolSize)}` : '' }
          >
            { String(filterPrice(arr[arr.length - 1])).split('.')[0] }
          </Text>
          { String(filterPrice(arr[arr.length - 1])).split('.')[1] ? '.' + String(filterPrice(arr[arr.length - 1])).split('.')[1] : '' }
        </Fragment>
      )
    }
    return  (
      <Fragment>
        <Text 
          className={
            cn(`${CssPrefix}-price__text-content`, {
              [`${CssPrefix}-price__content-large`]: type === 'large',
              [`${CssPrefix}-price__content-large-middle`]: type === 'largeMiddle',
              [`${CssPrefix}-price__content-middle`]: type === 'middle',
              [`${CssPrefix}-price__content-small-middle`]: type === 'smallMiddle',
              [`${CssPrefix}-price__content-small`]: type === 'small',
            })
          }
          style={ symbolSize !== 0 ? `font-size: ${pxTransform(symbolSize)}` : '' }
        >
          { String(filterPrice(price)).split('.')[0] }
        </Text>
        { String(filterPrice(price)).split('.')[1] ? '.' + String(filterPrice(price)).split('.')[1] : '' }
      </Fragment>
    )
  }

  return (
    <CompContainer customizeStyle={ customizeStyle } className={ cn(`${CssPrefix}-price`, className) }>
      {
        beforeContent !== '' && beforeContent
      }
      <View 
        className={
          cn(`${CssPrefix}-price__text`,{
            [`${CssPrefix}-price__text-large`]: type === 'large',
            [`${CssPrefix}-price__text-middle`]: type === 'largeMiddle' || type === 'smallMiddle',
            [`${CssPrefix}-price__text-small`]: type === 'small' || type === 'middle',
          })
        }
        style={ (color !== '' ? `color: ${color};` : '') + (size !== 0 ? `font-size: ${pxTransform(size)}` : '') }
      >
        <Text style={ unitSize === 0 ? '': `font-size: ${pxTransform(unitSize)}` }>{priceUnit}</Text>
        { arrayPrice(price) }
        {
          originPrice !== '' && 
          <Text 
            className={ `${CssPrefix}-price__origin-price` } 
            style={ `color: ${ originColor }` }
          >
           <Text>{priceUnit}</Text>
           { filterPrice(originPrice) }
          </Text>
        }
      </View>
      {
        afterContent !== '' && afterContent
      }
      {
        (commissionPrice !== '' && afterContent === '') && 
        <View className={ `${CssPrefix}-price__commission` }>
          <View className={ `${CssPrefix}-price__commission--box` }>
            佣金 { commissionPrice }
          </View>
        </View>
      }
    </CompContainer>
  )
}

export default Price