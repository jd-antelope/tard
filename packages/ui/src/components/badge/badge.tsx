import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import CompContainer from '../../common/comp-container'
import { BadgeProps } from './type'
import { CssPrefix } from '../../common'

const Badge: FC<BadgeProps> = ({
  dot = false,
  value = '',
  maxValue = 99,
  className,
  color,
  content,
  children,
  customizeStyle
}) => {
  const formatValue = (
    value: string | number | undefined,
    maxValue: number
  ): string | number => {
    if (!value) return ''
    const numValue = +value
    if (Number.isNaN(numValue)) {
      return value
    }
    return numValue > maxValue ? `${maxValue}+` : numValue
  }

  const rootClassName = [`${CssPrefix}-badge`]

  const val = formatValue(value, maxValue)

  return (
    <CompContainer
      className={classNames(rootClassName, className)}
      customizeStyle={customizeStyle}
    >
      {children}
      {
        content ?
          <View
            className={`${CssPrefix}-badge__num`}
            style={color ? `background:${color}` : ''}
          >
            {content}
          </View>
          :
          dot ?
            (
              <View
                className={`${CssPrefix}-badge__dot`}
                style={color ? `background:${color}` : ''}
              />
            ) : (
              val !== '' &&
              <View
                className={`${CssPrefix}-badge__num`}
                style={color ? `background:${color}` : ''}
              >
                {val}
              </View>
            )}
    </CompContainer>
  )
}

export default Badge