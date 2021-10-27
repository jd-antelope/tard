
import React from 'react'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import { SlPopupProps, SlPopupState } from '../../../types/popup'
import { objectToString } from '../../common/utils'

export default class SlPopup extends React.Component<SlPopupProps, SlPopupState> {

  public static defaultProps: SlPopupProps
  public static propTypes: InferProps<SlPopupProps>
  public constructor(props: SlPopupProps) {
    super(props)

    const { isOpened } = props
    this.state = {
      _isOpened: isOpened
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlPopupProps): void {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }
  private handleClose = (): void => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  private close = (): void => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    )
  }
  private outClick = () => {
    this.props.outClose && this.close()
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  public render(): JSX.Element {
    const { _isOpened } = this.state
    const {
      title, children, align
    } = this.props
    const rootClass = classNames(
      'slc-popup',
      {
        'slc-popup__active': _isOpened
      },
      this.props.className
    )
    const containerClass = classNames(
      'slc-popup__container',
      {
        'slc-popup__container__active': _isOpened
      }
    )
    const titleStyle: string = objectToString({
      'text-align': align
    })

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View className="slc-popup__mask" onClick={this.outClick} />
        <View className={containerClass}>
          {
            title ?
              (
                <View className="popup-header">
                  <View className="popup-header__title" style={titleStyle}>{title}</View>
                  <View className="popup-header-btn__close" onClick={this.close}></View>
                </View>
              ) : null
          }
          <View className="popup-main">
            {children}
          </View>
        </View>
      </View>
    )

  }
}

SlPopup.propTypes = {
  title: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left']),
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,

}

SlPopup.defaultProps = {
  isOpened: false,
  outClose: false,
  align: 'center'
}




