
import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { pxTransform } from '../../common/utils'
import { SlSkeletonProps } from '../../../types/skeleton'

const obj = {
  'squared': 'slc-skeleton-squared',
  'rounded': 'slc-skeleton-rounded',
  'default': ''
}

export default class SlSkeleton extends React.Component<SlSkeletonProps> {
  public static defaultProps: SlSkeletonProps

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { className, width, height, type } = this.props
    const customStyle = {
      'width': pxTransform(width || 24, 750),
      'minHeight': pxTransform(height || 24, 750),
    };
    return (
      <View className={ cn('slc-skeleton', className) }>
        <View 
          className={ 
            cn(
              'slc-skeleton-box', 
              obj[type || 'default']
            ) 
          }
          style={ customStyle }
        />
      </View>
    )
  }
}

SlSkeleton.defaultProps = {
  className: '',
  width: 24,
  height: 24,
  type: "default"
}
