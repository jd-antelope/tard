import classNames from 'classnames'
import React from 'react'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { objectToString } from 'src/common/utils'
import { SlToastProps, SlToastState } from '../../../types/toast'
import statusImg from './img.json'
export default class SlToast extends React.Component<
  SlToastProps,
  SlToastState
> {
  public static defaultProps: SlToastProps

  private _timer: NodeJS.Timeout | null

  public constructor(props: SlToastProps) {
    super(props)
    const { visible, duration } = props
    if (visible) {
      this.makeTimer(duration || 0)
    }
    this._timer = null
    this.state = {
      _isOpened: visible
    }
  }

  private clearTimmer(): void {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  private makeTimer(duration: number): void {
    if (duration === 0) {
      return
    }
    this._timer = setTimeout(() => {
      this.close()
    }, +duration)
  }

  private close(): void {
    const { _isOpened } = this.state
    if (_isOpened) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose // TODO: Fix dirty hack
      )
      this.clearTimmer()
    }
  }

  private handleClose(event?: CommonEvent): void {
    // TODO: Fix dirty hack
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event!)
    }
  }

  private handleClick = (event: CommonEvent): void => {
    const { onClick, status } = this.props
    if (status === 'loading') {
      return
    }
    if (onClick) {
      return onClick(event)
    }
    this.close()
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlToastProps): void {
    const { visible, duration } = nextProps
    if (!visible) {
      this.close()
      return
    }

    if (!this.state._isOpened) {
      this.setState({
        _isOpened: true
      })
    } else {
      this.clearTimmer()
    }
    this.makeTimer(duration || 0)
  }

  public render(): JSX.Element | null {
    const { _isOpened } = this.state
    const { customStyle = {}, text, icon, status, image, overlay, top } = this.props

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const realImg = image || statusImg[status!] || null
    const isRenderIcon = !!(icon && !(image || statusImg[status!]))
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    const bodyClass = classNames('toast-body', {
      'slc-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon,
      [`slc-toast__body--${status}`]: !!status
    })

    const style = (objectToString(Object.assign(customStyle, {
      'top': top
    })))
    const iconClass = classNames('slc-icon', {
      [`slc-icon-${icon}`]: icon
    })

    return _isOpened ? (
      <View className={classNames('slc-toast', this.props.className)}>
        {overlay && <View className='slc-toast__overlay' />}
        <View
          className={bodyClass}
          style={style}
          onClick={this.handleClick}
        >
          <View className='toast-body-content'>
            {realImg ? (
              <Image
                className='toast-body-content__img-item'
                src={realImg}
                mode='scaleToFill'
              />
            ) : null}
            {isRenderIcon && (
              <View className='toast-body-content__icon'>
                <Text className={iconClass} />
              </View>
            )}
            {text && (
              <View className='toast-body-content__info'>
                {text}
              </View>
            )}
          </View>
        </View>
      </View>
    ) : null
  }
}

SlToast.defaultProps = {
  duration: 3000,
  visible: false,
  overlay: false,
  top: '50%'
}
