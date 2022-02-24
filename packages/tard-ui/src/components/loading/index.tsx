
import React from 'react'
import cn from 'classnames'
import { View, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { SlLoadingProps } from '../../../types/loading'
import { pxTransform, objectToString } from '../../common/utils'
import { isFunction } from '../../common/is'

const loadingObj = {
  'default': 'loading',
  'ios': 'loading-ios',
  'loading': 'loading-size'
}

export default class SlLoading extends React.Component<SlLoadingProps> {
  public static defaultProps: SlLoadingProps

  private handler = (event: CommonEvent): void => {
    if (isFunction(this.props.onClick)) {
      this.props.onClick(event)
    }
  }
  
  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { 
      type = 'default', color, overlay, size = 0
    } = this.props

    const iconClass = cn('slc-loading-icon slc-icon', `slc-icon-${loadingObj[type]}`)

    const style = (objectToString(size !== 0 ? { 
      'width': pxTransform(size),
      'height': pxTransform(size),
      'font-size': pxTransform(size),
    } : {}))
  
    return (
      <View 
        className={ cn('slc-loading', { 'slc-loading-flex': overlay }) }
        onClick={ this.handler }
      >
        <Text 
          className={iconClass} 
          style={ 
            (color !== '' ? `color: ${color};` : '') + style
          } 
        />
      </View>
    )
  }
}


SlLoading.defaultProps = {
  className: '', 
  type: 'default',
  color: '',
  overlay: false,
  size: 0,
  onClick: null
}
