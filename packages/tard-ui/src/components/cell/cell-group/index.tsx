import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { SlCellGroupProps } from '../../../../types/cell'
// import { pxTransform } from '../../common/utils'

export default class SlCellGroup extends React.Component<SlCellGroupProps> {
  public static defaultProps: SlCellGroupProps

  public render(): JSX.Element {
    const {
      title,
      border,
      inset,
      children
    } = this.props

    const itemClass = classNames(
      'slc-cell-group-item',
      {
        'slc-cell__border': border,
        'slc-cell__inset': inset
      }
    )

    return (
      <View className='slc-cell-group'>
        {title && <View className='slc-cell-group-title'>{title}</View>}
        <View className={itemClass}>
          {children}
        </View>
      </View>
    )
  }
}

SlCellGroup.defaultProps = {
  border: true,
  inset: false
}


