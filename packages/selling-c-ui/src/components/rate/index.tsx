
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { SlRateProps, SlRateState } from '../../../types/rate'
import { pxTransform } from '../../common/utils'

export default class SlRate extends React.Component<SlRateProps, SlRateState> {
  public static defaultProps: SlRateProps
  public static propTypes: InferProps<SlRateProps>

  private handleClick(event: CommonEvent): void {
    this.props.onChange && this.props.onChange(event)
  }

  private isActiveRate (cls: string, type: string): boolean {
      return cls.includes(`--${type}`)
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const {
      customStyle,
      className,
      value = 0,
      max = 5,
      size,
      margin = 5,
      activeColor
    } = this.props

    const iconStyle = {
      marginRight: pxTransform(margin)
    }

    const starIconStyle = {
      fontSize: size ? `${size}px` : ''
    }

    const activeIconStyle = {
      color: activeColor
    }
    
    const rootClassName = ['slc-rate']
    
    // 生成星星颜色 className 数组，方便在jsx中直接map
    const classNameArr: string[] = []
    const floorValue = Math.floor(value)
    const ceilValue = Math.ceil(value)
    for (let i = 0; i < max; i++) {
      if (floorValue > i) {
        classNameArr.push('slc-rate__icon slc-rate__icon--on')
      } else if (ceilValue - 1 === i) {
        classNameArr.push('slc-rate__icon slc-rate__icon--half')
      } else {
        classNameArr.push('slc-rate__icon slc-rate__icon--off')
      }
    }

    return (
      <View className={classNames(rootClassName, className)} style={customStyle}>
        {classNameArr.map((cls, i) => (
          <View
            className={cls}
            key={`slc-rate-star-${i}`}
            style={ iconStyle }
            onClick={this.handleClick.bind(this, i + 1)}
          >
            <Text
              className='slc-icon slc-icon-star-2'
              style={this.isActiveRate(cls, 'on') ? Object.assign(activeIconStyle, starIconStyle) : starIconStyle}
            ></Text>
            <View className='slc-rate__left' style={this.isActiveRate(cls, 'half') ? activeIconStyle : {}}>
              <Text
                className='slc-icon slc-icon-star-2'
                style={starIconStyle}
              ></Text>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

SlRate.defaultProps = {
  customStyle: '',
  className: '',
  size: 0,
  value: 0,
  max: 5,
  margin: 5,
  activeColor: ''
}

SlRate.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number,
  max: PropTypes.number,
  margin: PropTypes.number,
  onChange: PropTypes.func,
  activeColor: PropTypes.string
}
