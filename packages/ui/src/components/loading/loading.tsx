
import React, { FC } from 'react'
import cn from 'classnames'
import { Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { LoadingProps } from './type'
import CompContainer from '../../common/comp-container'
import { pxTransform, objectToString } from '../../common/utils'
import { isFunction } from '../../common/is'
import { CssPrefix } from '../../common'

const loadingObj = {
  'default': 'loading',
  'ios': 'loading-ios',
  'loading': 'loading-size'
}

const LoadingComponent: FC<LoadingProps> = ({ 
  type = 'default',
  color = '',
  overlay = false,
  size = 0,
  onClick = null,
  customizeStyle = ''
}) => {

  const handler = (event: CommonEvent): void => {
    if (isFunction(onClick)) {
      onClick(event)
    }
  }

  const iconClass = cn(`${CssPrefix}-loading-icon ${CssPrefix}-icon`, `${CssPrefix}-icon-${loadingObj[type]}`)

  const style = (
    objectToString(size !== 0 ? { 
      'width': pxTransform(size),
      'height': pxTransform(size),
      'font-size': pxTransform(size),
    } : {})
  )

  return (
    <CompContainer 
      className={ cn(`${CssPrefix}-loading`, { [`${CssPrefix}-loading-flex`]: overlay }) }
      onClick={ handler }
      customizeStyle={ customizeStyle }
    >
      <Text 
        className={iconClass} 
        style={ 
          (color !== '' ? `color: ${color};` : '') + style
        } 
      />
    </CompContainer>
  )
}

export default LoadingComponent
