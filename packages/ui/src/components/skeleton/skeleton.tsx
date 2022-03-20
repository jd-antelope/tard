
import React, { FC } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { pxTransform } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import { SkeletonProps } from './type'

const obj = {
  'squared': 'slc-skeleton-squared',
  'rounded': 'slc-skeleton-rounded',
  'default': ''
}

const Skeleton: FC<SkeletonProps> = ({ 
  className = '',
  width = 24,
  height = 24,
  type = "default",
  customizeStyle = ''
}) => {
  const customStyle = {
    'width': pxTransform(width || 24),
    'minHeight': pxTransform(height || 24),
  };
  return (
    <CompContainer customizeStyle={customizeStyle} className={ cn('slc-skeleton', className) }>
      <View 
        className={ 
          cn(
            'slc-skeleton-box', 
            obj[type || 'default']
          ) 
        }
        style={ customStyle }
      />
    </CompContainer>
  )
}

export default Skeleton
