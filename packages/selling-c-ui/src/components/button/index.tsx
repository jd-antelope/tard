
import React from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { ButtonProps } from '@tarojs/components/types/Button'
import { View, Button, Form } from '@tarojs/components'
import { BaseEventOrig, CommonEvent } from '@tarojs/components/types/common'
import { SlButtonProps, SlButtonState } from '../../../types/sl-button'
import Common from '../../common/common'
import { objectToString } from '../../common/utils'

const SIZE_CLASS = {
  small: 'small',
  middle: 'middle',
  large: 'large'
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
      this.props.onClick && this.props.onClick(event)
    }
  }

  private onGetUserInfo(event: CommonEvent): void {
    this.props.onGetUserInfo && this.props.onGetUserInfo(event)
  }

  private onContact(
    event: BaseEventOrig<ButtonProps.onContactEventDetail>
  ): void {
    this.props.onContact && this.props.onContact(event)
  }

  private onGetPhoneNumber(event: CommonEvent): void {
    this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event)
  }

  private onError(event: CommonEvent): void {
    this.props.onError && this.props.onError(event)
  }

  private onOpenSetting(event: CommonEvent): void {
    this.props.onOpenSetting && this.props.onOpenSetting(event)
  }

  private onSumit(event: CommonEvent): void {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.$scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true
      })
    }
  }

  private onReset(event: CommonEvent): void {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
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
      size = 'normal',
      radius = 0,
      fill,
      full,
      lang,
      disabled,
      formType,
      openType,
      color,
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

    const rootClassName = ['slc-button', 'slc-button--normal'];
    const classObject = {
      [`slc-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'slc-button--disabled': disabled,
      'slc-button--full': full,
      'slc-button--fill': fill
    }
    const style = (objectToString(Object.assign(customStyle, {
      'border-radius': Taro.pxTransform(radius),
      'color': color,
      'border-color': borderColor,
      'background-color': fillColor
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
      ></Button>
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
  fill: false,
  lang: 'zh_CN',
  color: '',
  fillColor: '',
  borderColor: '',
  radius: 0,
  loading: false,
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
SlButton.propTypes = {
  fill: PropTypes.bool,
  radius: PropTypes.number,
  lang: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small', 'middle', 'large']),
  full: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  formType: PropTypes.oneOf(['submit', 'reset', '']),
  openType: PropTypes.oneOf([
    'contact',
    'share',
    'getUserInfo',
    'getPhoneNumber',
    'launchApp',
    'openSetting',
    'feedback',
    'getRealnameAuthInfo',
    'getAuthorize',
    'contactShare',
    ''
  ]),
  sessionFrom: PropTypes.string,
  sendMessageTitle: PropTypes.string,
  sendMessagePath: PropTypes.string,
  sendMessageImg: PropTypes.string,
  showMessageCard: PropTypes.bool,
  appParameter: PropTypes.string,
  onGetUserInfo: PropTypes.func,
  onContact: PropTypes.func,
  onGetPhoneNumber: PropTypes.func,
  onError: PropTypes.func,
  onOpenSetting: PropTypes.func
}
