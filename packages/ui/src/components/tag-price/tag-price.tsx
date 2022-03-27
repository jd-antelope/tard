
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import cn from 'classnames'
import { TagPriceProps } from './type'
import { pxTransform } from '../../utils'
import CompContainer from '../../common/comp-container'
import Price from '../price'
import { cssPrefix } from '../../common'

const TagPrice: FC<TagPriceProps> = ({
  className = '',
  color = '#FF2929',
  title = '价格',
  price = '0',
  size = 24,
  customizeStyle = ''
}) => {
  const CssPrefix = cssPrefix()
  const containerStyle = {
    color: color,
    fontSize: pxTransform(size || 24)
  }

  const titleStyle = {
    background: color,
    borderColor: color
  }

  return (
    <CompContainer customizeStyle={ customizeStyle } className={cn(`${CssPrefix}-tag-price`, className)} style={containerStyle}>
      <View className={ `${CssPrefix}-tag-price__title` } style={titleStyle}>{title}</View>
      <Price 
        price={price} color={color} 
        symbolSize={size} unitSize={size}
        className={ `${CssPrefix}-tag-price__price` }
      />
    </CompContainer>
  )
}

export default TagPrice
