import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text } from '@tarojs/components'
import { SlIconProps } from '../../../types/sl-icon'
import { mergeStyle, pxTransform } from '../../common/utils'

export default class SlIcon extends React.Component<SlIconProps> {
  public static defaultProps: SlIconProps
  public static propTypes: InferProps<SlIconProps>

  private handleClick(): void {
    this.props.onClick && this.props.onClick(arguments as any)
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      prefixClass,
      value,
      size,
      color
    } = this.props

    const rootStyle = {
      fontSize: `${pxTransform(parseInt(String(size)) * 2)}`,
      color
    }

    const iconName = value ? `${prefixClass}-${value}` : ''
    return (
      <Text
        className={classNames(prefixClass, iconName, className)}
        style={mergeStyle(rootStyle, customStyle as object)}
        onClick={this.handleClick.bind(this)}
      ></Text>
    )
  }
}

SlIcon.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'slc-icon',
  value: '',
  color: '',
  size: 24
}

SlIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
}
