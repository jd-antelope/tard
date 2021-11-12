
import React from 'react'
import { View } from '@tarojs/components'
import { SlTagPriceProps, SlTagPriceState } from '../../../types/tag-price'
import { pxTransform } from '../../common/utils'
import cn from 'classnames'
import SlPrice from '../price'

export default class SlTagPrice extends React.Component<SlTagPriceProps, SlTagPriceState> {
  public static defaultProps: SlTagPriceProps

  public constructor(props: SlTagPriceProps) {
    super(props)
  }
  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {

    const { price, title, color, size, className} = this.props

    const containerStyle = {
      color: color,
      fontSize: pxTransform(size || 24)
    }

    const titleStyle = {
      background: color,
      borderColor: color
    }

    return (
      <View className={cn("slc-tag-price", className)} style={containerStyle}>
        <View className="slc-tag-price__title" style={titleStyle}>{title}</View>
        <SlPrice price={price} color={color} symbolSize={size} unitSize={size}
        className="slc-tag-price__price"> </SlPrice>
      </View>
    )
  }
}

SlTagPrice.defaultProps = {
  color: '#FF2929',
  title: '渠道奖励',
  price: '0',
  size: 24,
}
