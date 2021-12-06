
import React, { Fragment } from 'react'
import classNames from 'classnames'
import SlImage from '../image'
import SlButton from '../button'
import PropTypes, { InferProps } from 'prop-types'
import { View, Text } from '@tarojs/components'
import { SlEmptyProps, SlEmptyState } from '../../../types/empty'

export default class SlEmpty extends React.Component<SlEmptyProps, SlEmptyState> {
  public static defaultProps: SlEmptyProps
  public static propTypes: InferProps<SlEmptyProps>

  public constructor(props: SlEmptyProps) {
    super(props)
  }

  private click = () => {
    this.props.onClick && this.props.onClick()
  }

  // eslint-disable-next-line no-undef
  public render(): JSX.Element | null {
    const { src, text, btnText, rect, children } = this.props
    const rootClass = classNames(
      'slc-empty',
      this.props.className
    )

    const emptyImgClass = classNames(
      'slc-empty__image',
      { [`slc-empty__image__${rect}`]: ['angle', 'circle'].includes(rect) })

    return (
      <View className={rootClass}>
        {src && <SlImage src={src} className={emptyImgClass} />}
        {text && <Text className="slc-empty__text">{text}</Text>}
        {children ? children :
          <Fragment>
            {btnText && <SlButton fill radius={12} onClick={this.click}>{btnText}</SlButton>}
          </Fragment>
        }

      </View>
    )
  }
}

SlEmpty.defaultProps = {
  src: '',
  text: '',
  btnText: '',
  rect: 'normal',
  onClick: () => { }
}

SlEmpty.propTypes = {
  src: PropTypes.string,
  rect: PropTypes.oneOf(['angle', 'circle']),
  text: PropTypes.string,
  btnText: PropTypes.bool,
  onClick: PropTypes.func,
}

