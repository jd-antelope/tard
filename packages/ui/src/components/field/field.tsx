
import classNames from 'classnames'
import React, { Fragment, FC, useState } from 'react'
import { Input, Label, Text, View, Textarea } from '@tarojs/components'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import { TextareaProps } from '@tarojs/components/types/Textarea'
import CompContainer from '../../common/comp-container'
import { pxTransform } from '../../common/utils'
import { isFunction } from '../../common/is'
import { CssPrefix } from '../../common'
import Icon from '../icon'
import {
  FieldProps,
  BlurEventDetail,
  ConfirmEventDetail,
  FocusEventDetail,
  InputEventDetail,
  KeyboardHeightEventDetail
} from './type'

type PickSlInputProps = Pick<
  FieldProps,
  'maxlength' | 'disabled' | 'password'
>
type GetInputPropsReturn = PickSlInputProps & Pick<InputProps, 'type'>

type GetTextareaPropsReturn = TextareaProps & Pick<FieldProps, 'type'>

function getInputProps(props: FieldProps): GetInputPropsReturn {
  const actualProps = {
    type: props.type,
    maxlength: props.maxlength,
    disabled: props.disabled,
    password: false
  }

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number'
      actualProps.maxlength = 11
      break
    case 'password':
      actualProps.type = 'text'
      actualProps.password = true
      break
    default:
      break
  }

  return actualProps as GetInputPropsReturn
}

function getTextareaProps(props: FieldProps): GetTextareaPropsReturn {
  const actualProps = {
    type: props.type,
    maxlength: props.maxlength,
    disabled: props.disabled,
    autoHeight: props.autoHeight,
    fixed: props.fixed,
    password: false
  }

  switch (actualProps.type) {
    case 'textarea':
      actualProps.maxlength = 1000
      break
    default:
      break
  }

  return actualProps as GetTextareaPropsReturn
}


const FieldComponent: FC<FieldProps> = (props) => {
  const [inputClearing, setInputClearing] = useState<boolean>(false)
  // private inputClearing = false

  const handleInput = (event: BaseEventOrig<InputEventDetail>): void => {
    if (isFunction(props.onChange)) props.onChange(event.detail.value, event)
  }

  const handleFocus = (event: BaseEventOrig<FocusEventDetail>): void => {
    if (typeof props.onFocus === 'function') {
      props.onFocus(event.detail.value, event)
    }
  }

  const handleBlur = (event: BaseEventOrig<BlurEventDetail>): void => {
    if (typeof props.onBlur === 'function') {
      props.onBlur(event.detail.value, event)
    }
    if (event.type === 'blur' && !inputClearing && isFunction(props.onChange)) {
      // fix # 583 AtInput 不触发 onChange 的问题
      props.onChange(
        event.detail.value,
        event as BaseEventOrig<InputEventDetail>
      )
    }
    // 还原状态
    setInputClearing(false)
  }

  const handleConfirm = (event: BaseEventOrig<ConfirmEventDetail>): void => {
    if (isFunction(props.onConfirm)) {
      props.onConfirm(event.detail.value, event)
    }
  }

  const handleClick = (event: ITouchEvent): void => {
    if (isFunction(props.onClick)) {
      props.onClick(event)
    }
  }

  const handleClearValue = (event: ITouchEvent): void => {
    setInputClearing(true)
    if (isFunction(props.onChange))
      props.onChange('', event)
  }

  const handleKeyboardHeightChange = (
    event: BaseEventOrig<KeyboardHeightEventDetail>
  ): void => {
    if (isFunction(props.onKeyboardHeightChange)) {
      props.onKeyboardHeightChange(event)
    }
  }

  const handleErrorClick = (event: ITouchEvent): void => {
    if (isFunction(props.onErrorClick)) {
      props.onErrorClick(event)
    }
  }

  const {
    className,
    customStyle,
    name,
    cursorSpacing,
    confirmType,
    cursor,
    selectionStart,
    selectionEnd,
    adjustPosition,
    border,
    label,
    error,
    errorMessage,
    clear,
    placeholder,
    placeholderStyle,
    placeholderClass,
    autoFocus,
    focus,
    value,
    required,
    children,
    disabled,
    readonly,
    contentColor,
    labelClass,
    labelWidth = 144,
    labelAlign,
    valueAlign,
    autoHeight,
    textareaHeight,
    card,
    leftIcon,
    rightIcon,
    iconColor,
    iconSize,
    showWordLimit,
  } = props

  const { type, maxlength, password } = getInputProps(props)

  const { type: textareaType, fixed } = getTextareaProps(props)

  const rootCls = classNames(
    `${CssPrefix}-field`,
    {
      [`${CssPrefix}-field--without-border`]: !border,
      [`${CssPrefix}-field__textarea-padding`]: textareaType == 'textarea' && !label,
      [`${CssPrefix}-field-card`]: card
    },
    className
  )

  const containerCls = classNames(`${CssPrefix}-field__container`, {
    [`${CssPrefix}-field--error`]: error,
    [`${CssPrefix}-field--disabled`]: disabled,
    [`${CssPrefix}-field__content-textarea`]: textareaType == 'textarea'
  })

  const placeholderCls = classNames('placeholder', placeholderClass)

  const labelCls = classNames(
    `${CssPrefix}-field__title`, {
      [`${CssPrefix}-field__title--required`]: required
    }, labelClass
  )

  const leftIconCls = classNames(`${CssPrefix}-field__title--left-icon`)

  const labelStyle = {
    'width': pxTransform(labelWidth),
    'text-align': labelAlign
  }

  const id = name && { id: name }

  const nameProps = name ? { name } : {}
  return (
    <CompContainer customizeStyle={ props.customizeStyle }>
      <View className={rootCls} style={customStyle}>
        <View className={containerCls} onClick={handleClick}>
          {(label || leftIcon) && (
            <Label
            className={labelCls}
            style={labelStyle}
            for={name}
            >
              {leftIcon && <Icon className={leftIconCls} value={leftIcon} color={iconColor} size={ iconSize }></Icon>}
              {label}
            </Label>
          )}
          {
            textareaType === 'textarea' ? 
              <Fragment>
                <Textarea 
                  className={ `${CssPrefix}-field__textarea` }
                  { ...id }
                  { ...nameProps }
                  style={ `color: ${ contentColor };${textareaHeight ? `height: ${pxTransform(textareaHeight)}`: ''}` }
                  disabled={disabled || readonly}
                  placeholderStyle={placeholderStyle}
                  placeholderClass={classNames(`${CssPrefix}-field__box-textarea__ph`, placeholderCls)}
                  placeholder={placeholder}
                  cursorSpacing={cursorSpacing}
                  maxlength={maxlength}
                  autoFocus={autoFocus}
                  autoHeight={autoHeight}
                  fixed={fixed}
                  focus={focus}
                  value={value}
                  cursor={cursor}
                  selectionStart={selectionStart}
                  selectionEnd={selectionEnd}
                  adjustPosition={adjustPosition}
                  onInput={handleInput}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onConfirm={handleConfirm}
                  onKeyboardHeightChange={handleKeyboardHeightChange}
                />
                { showWordLimit && 
                  <View className={ `${CssPrefix}-field__word-limit` }>
                    <Text className={ `${CssPrefix}-field__word-num` }>{(value || '').length}</Text>
                    /{maxlength}
                  </View>
                }
              </Fragment> 
              : <Fragment>
                <Input
                  className={ `${CssPrefix}-field__input` }
                  { ...id }
                  { ...nameProps }
                  type={type}
                  password={password}
                  disabled={disabled || readonly}
                  style={ `color: ${ contentColor };text-align: ${valueAlign}` }
                  placeholderStyle={placeholderStyle}
                  placeholderClass={placeholderCls}
                  placeholder={placeholder}
                  cursorSpacing={cursorSpacing}
                  maxlength={maxlength}
                  autoFocus={autoFocus}
                  focus={focus}
                  value={value}
                  confirmType={confirmType}
                  cursor={cursor}
                  selectionStart={selectionStart}
                  selectionEnd={selectionEnd}
                  adjustPosition={adjustPosition}
                  onInput={handleInput}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onConfirm={handleConfirm}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                  // @ts-ignore
                  onKeyboardHeightChange={handleKeyboardHeightChange}
                />
                {clear && value && (
                  <View className={ `${CssPrefix}-field__icon` } onClick={handleClearValue}>
                    {/* <Text className=`${CssPrefix}-icon ${CssPrefix}-icon-close-circle ${CssPrefix}-field__icon-close'></Text> */}
                    <Icon value='close-circle' color="#999999" size={ 16 }></Icon>
                  </View>
                )}
                {!clear && rightIcon &&
                  <View className={ `${CssPrefix}-field__icon` } onClick={() => props.onRightIconClick}>
                    <Icon value={rightIcon} color={iconColor} size={ iconSize }></Icon>
                  </View>  
                }
                {error && (
                  <View
                    className={ `${CssPrefix}-field__error` }
                    style={`padding-left: ${pxTransform(labelWidth)};width: 100%`}
                    onTouchStart={handleErrorClick}
                  >
                    <Text>{errorMessage || `${label}必填`}</Text>
                  </View>
                )}
                {/* <View className=`${CssPrefix}-field__children`>{props.children}</View> */}
              </Fragment>
          }
          {
            children && children
          }
        </View>
      </View>
    </CompContainer>
    
  )
}

export default FieldComponent