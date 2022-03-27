import React, { FC } from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import CompContainer from '../../common/comp-container'
import { pxTransform } from '../../utils';
import { ProgressProps } from './type'
import { cssPrefix } from '../../common';

const Progress: FC<ProgressProps> = ({
  percent = 0,
  strokeWidth = 4,
  color = '#DC8D20',
  trackColor = '#EFEFEF',
  showPivot = true,
  radius = 6,
  status,
  pivotText,
  className,
  customizeStyle
}) => {
  const CssPrefix = cssPrefix()
  const rootClass = classNames(
    `${CssPrefix}-progress`,
    {
      [`${CssPrefix}-progress--${status}`]: !!status
    },
    className
  )
  const iconClass = classNames(`${CssPrefix}-icon`, {
    [`${CssPrefix}-icon-close-circle`]: status === 'error',
    [`${CssPrefix}-icon-check-circle`]: status === 'success'
  })

  const trackStyle = {
    backgroundColor: trackColor,
    borderRadius: `${pxTransform(radius)}`,
  }

  const progressStyle = {
    width: percent && `${+percent}%`,
    height: strokeWidth && `${pxTransform(+strokeWidth)}`,
    borderRadius: `${pxTransform(radius)}`,
    backgroundColor: color
  }

  return (
    <CompContainer className={rootClass} customizeStyle={customizeStyle}>
      <View className={`${CssPrefix}-progress__outer`}>
        <View className={`${CssPrefix}-progress__outer-inner`} style={trackStyle}>
          <View
            className={`${CssPrefix}-progress__outer-inner-background`}
            style={progressStyle}
          />
        </View>
      </View>

      {showPivot && (
        <View className={`${CssPrefix}-progress__content`}>
          {!status || status === 'progress' ? (
            `${pivotText ? pivotText : `${percent}%`}`
          ) : (
            <Text className={iconClass}></Text>
          )}
        </View>
      )}
    </CompContainer>

  )
}

export default Progress
