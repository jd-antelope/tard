import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
// import Common from '../../common/common'
import { SlBadgeProps } from '../../../types/badge'

export default class SlBadge extends React.Component<SlBadgeProps> {
  public static defaultProps: SlBadgeProps
  public static propTypes: InferProps<SlBadgeProps>

  public constructor(props: SlBadgeProps) {
    super(props)
    this.state = {}
  }

  private formatValue(
    value: string | number | undefined,
    maxValue: number
  ): string | number {
    if (value === '' || value === null || typeof value === 'undefined')
      return ''
    const numValue = +value
    if (Number.isNaN(numValue)) {
      return value
    }
    return numValue > maxValue ? `${maxValue}+` : numValue
  }

  public render(): JSX.Element {
    const { dot, value, maxValue = 99, customStyle } = this.props
    const rootClassName = ['slc-badge']

    const val = this.formatValue(value, maxValue)

    return (
      <View
        className={classNames(rootClassName, this.props.className)}
        style={customStyle}
      >
        {this.props.children}
        {dot ? (
          <View className='slc-badge__dot'></View>
        ) : (
          val !== '' && <View className='slc-badge__num'>{val}</View>
        )}
      </View>
    )
  }
}

SlBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: ''
}

SlBadge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
