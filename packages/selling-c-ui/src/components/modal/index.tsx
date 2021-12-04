import classNames from 'classnames'
import React from 'react'
import { Button, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { SlModalProps, SlModalState } from '../../../types/modal'
import { handleTouchScroll } from '../../common/utils'
import SlModalAction from './action/index'
import SlModalContent from './content/index'
import SlModalHeader from './header/index'
import { isWeb } from '../../common/utils'

export default class SlModal extends React.Component<
  SlModalProps,
  SlModalState
> {
  public static defaultProps: SlModalProps

  public constructor(props: SlModalProps) {
    super(props)
    const { isOpened } = props
    this.state = {
      _isOpened: isOpened,
      isWEB: isWeb
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlModalProps): void {
    const { isOpened } = nextProps

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  private handleClickOverlay = (): void => {
    if (this.props.closeOnClickOverlay) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose
      )
    }
  }

  private handleClose = (event?: CommonEvent): void => {
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event!)
    }
  }

  private handleCancel = (event: CommonEvent): void => {
    if (typeof this.props.onCancel === 'function') {
      this.props.onCancel(event)
    }
  }

  private handleConfirm = (event: CommonEvent): void => {
    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm(event)
    }
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  public render(): JSX.Element {
    const { _isOpened, isWEB } = this.state
    const { title, content, cancelText, confirmText, contentAlign } = this.props

    const children = {
      SlModalHeader: null,
      SlModalContent: null,
      SlModalAction: null
    }

    React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const displayName = (child.type as any).displayName
        children[displayName] = child
      }
    })
    
    const rootClass = classNames(
      'slc-modal',
      {
        'slc-modal--active': _isOpened
      },
      this.props.className
    )

    if (title || content) {
      const isRenderAction = cancelText || confirmText
      return (
        <View className={rootClass}>
          <View
            onClick={this.handleClickOverlay}
            className='slc-modal__overlay'
          />
          <View className='slc-modal__container'>
            {title && (
              <SlModalHeader>
                <Text>{title}</Text>
              </SlModalHeader>
            )}
            {children.SlModalHeader}
            {content && (
              <SlModalContent>
                <View className='content-simple' style={`text-align: ${contentAlign}`}>
                  {isWEB ? (
                    <Text
                      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                      // @ts-ignore
                      dangerouslySetInnerHTML={{
                        __html: content.replace(/\n/g, '<br/>')
                      }}
                    ></Text>
                  ) : (
                    <Text>{content}</Text>
                  )}
                </View>
              </SlModalContent>
            )}
            {children.SlModalContent}
            {isRenderAction && (
              <SlModalAction isSimple>
                {cancelText && (
                  <Button className='slc-modal__button' onClick={this.handleCancel}>{cancelText}</Button>
                )}
                {confirmText && (
                  <Button className='slc-modal__button slc-modal__button-confirm' onClick={this.handleConfirm}>{confirmText}</Button>
                )}
              </SlModalAction>
            )}
             {children.SlModalAction}
          </View>
        </View>
      )
    }

    return (
      <View onTouchMove={this.handleTouchMove} className={rootClass}>
        <View className='slc-modal__overlay' onClick={this.handleClickOverlay} />
        <View className='slc-modal__container'>{this.props.children}</View>
      </View>
    )
  }
}

SlModal.defaultProps = {
  isOpened: false,
  closeOnClickOverlay: true,
  contentAlign: 'center'
}