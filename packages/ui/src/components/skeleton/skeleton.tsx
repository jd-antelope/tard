
import React, { FC } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { pxTransform } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import { cssPrefix } from '../../common'
import { SkeletonProps } from './type'

const obj = {
  'squared': `${cssPrefix()}-skeleton-squared`,
  'rounded': `${cssPrefix()}-skeleton-rounded`,
  'default': ''
}

const Skeleton: FC<SkeletonProps> = ({ 
  className = '',
  width = 24,
  height = 24,
  type = "default",
  customizeStyle = ''
}) => {
  const CssPrefix = cssPrefix()
  const customStyle = {
    'width': pxTransform(width || 24),
    'minHeight': pxTransform(height || 24),
  };
  return (
    <CompContainer customizeStyle={customizeStyle} className={ cn(`${CssPrefix}-skeleton`, className) }>
      <View 
        className={ 
          cn(
            `${CssPrefix}-skeleton-box`, 
            obj[type || 'default']
          ) 
        }
        style={ customStyle }
      />
    </CompContainer>
  )
}

export default Skeleton
