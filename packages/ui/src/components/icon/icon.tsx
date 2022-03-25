import classNames from 'classnames'
import React, { FC } from 'react'
import { Text } from '@tarojs/components'
import { IconProps } from './type'
import { mergeStyle, pxTransform } from '../../utils'
import { cssPrefix } from '../../common'

const Icon: FC<IconProps> = (props) => {
  const CssPrefix = cssPrefix()
  const {
    customStyle = '',
    className = '',
    prefixClass = CssPrefix + '-icon',
    value = '',
    color = '',
    size = 16,
    onClick = () => {}
  } = props
  const handleClick = (e) => {
    onClick(e)
  }

  const rootStyle = {
    fontSize: `${pxTransform(parseInt(String(size)) * 2)}`,
    color
  }

  const iconName = value ? `${prefixClass}-${value}` : ''
  return (
    <Text
      className={ classNames(prefixClass, iconName, className) }
      style={ mergeStyle(rootStyle, customStyle as object) }
      onClick={ handleClick }
    />
  )
}

export default Icon