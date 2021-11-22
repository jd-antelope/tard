import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import Common from '../../common/common'
import { SlBadgeProps } from '../../../types/badge'

export default class SlBadge extends React.Component<SlBadgeProps> {
  public static defaultProps: SlBadgeProps

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
    const { dot, value, maxValue = 99, color, content } = this.props
    const rootClassName = ['slc-badge']

    const val = this.formatValue(value, maxValue)

    return (
      <Common
        className={classNames(rootClassName, this.props.className)}
      >
        {this.props.children}
        {
          content ?
            <View
              className='slc-badge__num'
              style={color ? `background:${color}` : ''}
            >
              {content}
            </View>
            :
            dot ?
              (
                <View
                  className='slc-badge__dot'
                  style={color ? `background:${color}` : ''}
                />
              ) : (
                val !== '' &&
                <View
                  className='slc-badge__num'
                  style={color ? `background:${color}` : ''}
                >
                  {val}
                </View>
              )}
      </Common>
    )
  }
}

SlBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
}

