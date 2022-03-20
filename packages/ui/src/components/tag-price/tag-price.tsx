
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { TagPriceProps } from './type'
import { pxTransform } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import cn from 'classnames'
import Price from '../price'

const TagPrice: FC<TagPriceProps> = ({
  className = '',
  color = '#FF2929',
  title = '价格',
  price = '0',
  size = 24,
  customizeStyle = ''
}) => {
  const containerStyle = {
    color: color,
    fontSize: pxTransform(size || 24)
  }

  const titleStyle = {
    background: color,
    borderColor: color
  }

  return (
    <CompContainer customizeStyle={ customizeStyle }>
      <View className={cn("slc-tag-price", className)} style={containerStyle}>
        <View className="slc-tag-price__title" style={titleStyle}>{title}</View>
        <Price 
          price={price} color={color} 
          symbolSize={size} unitSize={size}
          className="slc-tag-price__price" 
        />
      </View>
    </CompContainer>
  )
}

export default TagPrice
