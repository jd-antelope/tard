
import React from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { InferProps } from 'prop-types'
import { ButtonProps } from '@tarojs/components/types/Button'
import { View, Button, Form } from '@tarojs/components'
import { BaseEventOrig, CommonEvent } from '@tarojs/components/types/common'
import { SlButtonProps, SlButtonState } from '../../../types/button'
import Common from '../../common/common'
import { objectToString, pxTransform,  } from '../../common/utils'
import { isFunction } from '../../common/is'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
  mini: 'mini'
}
export default class SlButton extends React.Component<SlButtonProps, SlButtonState> {
  public static defaultProps: SlButtonProps
  public static propTypes: InferProps<SlButtonProps>

  public constructor(props) {
    super(props)
    this.state = {
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
    }
  }

  private onClick(event: CommonEvent): void {
    if (!this.props.disabled) {
      isFunction(this.props.onClick) && this.props.onClick(event)
    }
  }

  private onGetUserInfo(event: CommonEvent): void {
    isFunction(this.props.onGetUserInfo) && this.props.onGetUserInfo(event)
  }

  private onContact(
    event: BaseEventOrig<ButtonProps.onContactEventDetail>
  ): void {
    isFunction(this.props.onContact) && this.props.onContact(event)
  }

  private onGetPhoneNumber(event: CommonEvent): void {
    isFunction(this.props.onGetPhoneNumber) && this.props.onGetPhoneNumber(event)
  }

  private onError(event: CommonEvent): void {
    isFunction(this.props.onError) && this.props.onError(event)
  }

  private onOpenSetting(event: CommonEvent): void {
    isFunction(this.props.onOpenSetting) && this.props.onOpenSetting(event)
  }

  private onSumit(event: CommonEvent): void {
    if (this.state.isWEAPP || this.state.isWEB) {
      // @ts-ignore
      this.$scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true
      })
    }
  }

  private onReset(event: CommonEvent): void {
    if (this.state.isWEAPP || this.state.isWEB) {
      // @ts-ignore
      this.$scope.triggerEvent('reset', event.detail, {
        bubbles: true,
        composed: true
      })
    }
  }

  // eslint-disable-next-line no-undef
  public render(): JSX.Element | null {
    const {
      type,
      size = '',
      radius = 0,
      fill,
      full,
      lang,
      round,
      disabled,
      formType,
      openType,
      color,
      border,
      borderColor,
      fillColor,
      customStyle,
      sessionFrom,
      sendMessageTitle,
      sendMessagePath,
      sendMessageImg,
      showMessageCard,
      appParameter
    } = this.props
    const { isWEAPP, isWEB } = this.state

    const rootClassName = ['slc-button', `slc-button--${type}`];
    const classObject = {
      [`slc-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'slc-button--disabled': disabled,
      'slc-button--full': full,
     [ `slc-button--${round}`]: round,
      'slc-button--fill': fill,
      [`slc-button--${type}--border`]: border && type,
      // 'slc-button__no-border': (fill || fillColor) && !borderColor,
    }
    const selfColor: any = { color, borderColor, fillColor }
    if (fillColor && border) {
      selfColor.color = fillColor
      selfColor.borderColor = fillColor
      selfColor.fillColor = 'none'
    }
    if (fillColor && !border) {
      selfColor.color = '#fff'
      selfColor.border = 'none'
    }
    const style = (objectToString(Object.assign(customStyle, {
      'border-radius': pxTransform(radius),
      'color': selfColor.color,
      'border-color': selfColor.borderColor,
      'background': selfColor.fillColor,
    })))
    const webButton = (
      <Button
        className='slc-button__wxbutton'
        lang={lang}
        formType={formType}
      ></Button>
    )

    const button = (
      <Button
        className='slc-button__wxbutton'
        formType={formType}
        openType={openType}
        lang={lang}
        sessionFrom={sessionFrom}
        sendMessageTitle={sendMessageTitle}
        sendMessagePath={sendMessagePath}
        sendMessageImg={sendMessageImg}
        showMessageCard={showMessageCard}
        appParameter={appParameter}
        onGetUserInfo={this.onGetUserInfo.bind(this)}
        onGetPhoneNumber={this.onGetPhoneNumber.bind(this)}
        onOpenSetting={this.onOpenSetting.bind(this)}
        onError={this.onError.bind(this)}
        onContact={this.onContact.bind(this)}
      />
    )

    return (
      <Common
        className={classNames(rootClassName, classObject, this.props.className)}
        style={style}
        onClick={this.onClick.bind(this)}>
        {isWEB && !disabled && webButton}
        {isWEAPP && !disabled && (
          <Form
            onSubmit={this.onSumit.bind(this)}
            onReset={this.onReset.bind(this)}
          >
            {button}
          </Form>
        )}
        <View className='slc-button__text'>{this.props.children}</View>
      </Common>
    )
  }
}

SlButton.defaultProps = {
  type: 'default',
  fill: false,
  lang: 'zh_CN',
  color: '',
  round: 'normal',
  fillColor: '',
  border: false,
  borderColor: '',
  radius: 0,
  disabled: false,
  full: false,
  customStyle: {},
  // Button props
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: ''
}