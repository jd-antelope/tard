
import React, { FC } from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { ButtonProps } from '@tarojs/components/types/Button'
import { View, Button, Form } from '@tarojs/components'
import { BaseEventOrig, CommonEvent } from '@tarojs/components/types/common'
import { ButtonProps as CButtonProps } from './type'
import CompContainer from '../../common/comp-container'
import { objectToString, pxTransform } from '../../utils'
import { isFunction } from '../../utils/is'
import { CssPrefix } from '../../common'

const CButton: FC<CButtonProps> = (props) => {

  const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB
  const isWEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP

  const {
    type = 'primary',
    size = 'normal',
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
    customStyle = '',
    sessionFrom,
    sendMessageTitle,
    sendMessagePath,
    sendMessageImg,
    showMessageCard,
    appParameter
  } = props

  const rootClassName = [`${CssPrefix}-button`, `${CssPrefix}-button--${type}`]
  const classObject = {
    [`${CssPrefix}-button--${size}`]: size,
    [`${CssPrefix}-button--disabled`]: disabled,
    [`${CssPrefix}-button--full`]: full,
    [`${CssPrefix}-button--${round}`]: round,
    [`${CssPrefix}-button--fill`]: fill,
    [`${CssPrefix}-button--${type}--border`]: border && type,
    // 'slc-button__no-border': (fill || fillColor) && !borderColor,
  }

  const onClick = (event: CommonEvent) => {
    if (!props.disabled) {
      isFunction(props.onClick) && props.onClick(event)
    }
  }

  const onGetUserInfo = (event: CommonEvent) => {
    isFunction(props.onGetUserInfo) && props.onGetUserInfo(event)
  }

  const onContact = (
    event: BaseEventOrig<ButtonProps.onContactEventDetail>
  ) => {
    isFunction(props.onContact) && props.onContact(event)
  }

  const onGetPhoneNumber = (event: CommonEvent) => {
    isFunction(props.onGetPhoneNumber) && props.onGetPhoneNumber(event)
  }

  const onError = (event: CommonEvent) => {
    isFunction(props.onError) && props.onError(event)
  }

  const onOpenSetting = (event: CommonEvent) => {
    isFunction(props.onOpenSetting) && props.onOpenSetting(event)
  }

  const onSumit = (event: CommonEvent) => {
    if (isWEAPP || isWEB) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      $scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true
      })
    }
  }

  const onReset = (event: CommonEvent) => {
    if (isWEAPP || isWEB) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      $scope.triggerEvent('reset', event.detail, {
        bubbles: true,
        composed: true
      })
    }
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
  const borderColorObj = selfColor.borderColor ? { 'border-color': selfColor.borderColor } : {}
  const background = selfColor.fillColor ? { 'background': selfColor.fillColor } : {}
  const style = (objectToString(Object.assign(customStyle, {
    'border-radius': pxTransform(radius),
    'color': selfColor.color,
    ...borderColorObj,
    ...background,
  })))
  const webButton = (
    <Button
      className={ `${CssPrefix}-button__wxbutton` }
      lang={ lang }
      formType={ formType }
    />
  )


  const button = (
    <Button
      className={ `${CssPrefix}-button__wxbutton` }
      formType={ formType }
      openType={ openType }
      lang={ lang }
      sessionFrom={ sessionFrom }
      sendMessageTitle={ sendMessageTitle }
      sendMessagePath={ sendMessagePath }
      sendMessageImg={ sendMessageImg }
      showMessageCard={ showMessageCard }
      appParameter={ appParameter }
      onGetUserInfo={ onGetUserInfo }
      onGetPhoneNumber={ onGetPhoneNumber }
      onOpenSetting={ onOpenSetting }
      onError={ onError }
      onContact={ onContact }
    />
  )

  return (
    <CompContainer 
      className={ classNames(rootClassName, classObject, props.className) }
      onClick={ onClick } 
      customizeStyle={ props.customizeStyle }
      style={ style }
    >
      {isWEB && !disabled && webButton}
      {isWEAPP && !disabled && (
        <Form
          onSubmit={ onSumit }
          onReset={ onReset }
        >
          {button}
        </Form>
      )}
      <View className={ `${CssPrefix}-button__text` }>{props.children}</View>
    </CompContainer>
  )
}

export default CButton

