import React from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
// import { pxTransform } from 'src/common/utils';
import { SlProgressProps } from '../../../types/progress'

export default class SlProgress extends React.Component<SlProgressProps> {
  public static defaultProps: SlProgressProps
  public constructor(props) {
    super(props)
  }

  public render(): JSX.Element {
    const { percent, strokeWidth, color, radius, trackColor, showPivot, status, pivotText } = this.props

    const rootClass = classNames(
      'slc-progress',
      {
        [`slc-progress--${status}`]: !!status
      },
      this.props.className
    )
    const iconClass = classNames('slc-icon', {
      'slc-icon-close-circle': status === 'error',
      'slc-icon-check-circle': status === 'success'
    })

    const trackStyle = {
      backgroundColor: trackColor,
      borderRadius: `${radius}rpx`,
    }

    const progressStyle = {
      width: percent && `${+percent}%`,
      height: strokeWidth && `${+strokeWidth}rpx`,
      borderRadius: `${radius}rpx`,
      backgroundColor: color
    }

    return (
      <View className={rootClass}>
        <View className='slc-progress__outer'>
          <View className='slc-progress__outer-inner' style={trackStyle}>
            <View
              className='slc-progress__outer-inner-background'
              style={progressStyle}
            />
          </View>
        </View>

        {showPivot && (
          <View className='slc-progress__content'>
            {!status || status === 'progress' ? (
              `${pivotText ? pivotText : `${percent}%`}`
            ) : (
              <Text className={iconClass}></Text>
            )}
          </View>
        )}
      </View>

    )
  }
}

SlProgress.defaultProps = {
  percent: 0,
  strokeWidth: 4,
  color: '#DC8D20',
  trackColor: '#EFEFEF',
  showPivot: true,
  radius: 6,

}
