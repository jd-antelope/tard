
import classNames from 'classnames'
import React, { Fragment } from 'react'
import { Input, Label, Text, View, Textarea } from '@tarojs/components'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import { TextareaProps } from '@tarojs/components/types/Textarea'
import { pxTransform } from '../../common/utils'
import { isFunction } from '../../common/is'
import SlIcon from '../icon'
import {
  SlFieldProps,
  BlurEventDetail,
  ConfirmEventDetail,
  FocusEventDetail,
  InputEventDetail,
  KeyboardHeightEventDetail
} from '../../../types/field'

type PickSlInputProps = Pick<
  SlFieldProps,
  'maxlength' | 'disabled' | 'password'
>
type GetInputPropsReturn = PickSlInputProps & Pick<InputProps, 'type'>

type GetTextareaPropsReturn = TextareaProps & Pick<SlFieldProps, 'type'>

function getInputProps(props: SlFieldProps): GetInputPropsReturn {
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

function getTextareaProps(props: SlFieldProps): GetTextareaPropsReturn {
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


export default class SlField extends React.Component<SlFieldProps> {
  public static defaultProps: SlFieldProps
  // TODO: 有待考证是否为合理方式处理 #840
  private inputClearing = false

  private handleInput = (event: BaseEventOrig<InputEventDetail>): void => {
    if (isFunction(this.props.onChange)) this.props.onChange(event.detail.value, event)
  }

  private handleFocus = (event: BaseEventOrig<FocusEventDetail>): void => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event.detail.value, event)
    }
  }

  private handleBlur = (event: BaseEventOrig<BlurEventDetail>): void => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event.detail.value, event)
    }
    if (event.type === 'blur' && !this.inputClearing && isFunction(this.props.onChange)) {
      // fix # 583 AtInput 不触发 onChange 的问题
      this.props.onChange(
        event.detail.value,
        event as BaseEventOrig<InputEventDetail>
      )
    }
    // 还原状态
    this.inputClearing = false
  }

  private handleConfirm = (event: BaseEventOrig<ConfirmEventDetail>): void => {
    if (isFunction(this.props.onConfirm)) {
      this.props.onConfirm(event.detail.value, event)
    }
  }

  private handleClick = (event: ITouchEvent): void => {
    if (isFunction(this.props.onClick)) {
      this.props.onClick(event)
    }
  }

  private handleClearValue = (event: ITouchEvent): void => {
    this.inputClearing = true
    if (isFunction(this.props.onChange))
      this.props.onChange('', event)
  }

  private handleKeyboardHeightChange = (
    event: BaseEventOrig<KeyboardHeightEventDetail>
  ): void => {
    if (isFunction(this.props.onKeyboardHeightChange)) {
      this.props.onKeyboardHeightChange(event)
    }
  }

  private handleErrorClick = (event: ITouchEvent): void => {
    if (isFunction(this.props.onErrorClick)) {
      this.props.onErrorClick(event)
    }
  }

  public render(): JSX.Element {
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
      showWordLimit,
    } = this.props
    const { type, maxlength, password } = getInputProps(this.props)

    const { type: textareaType, fixed } = getTextareaProps(this.props)

    const rootCls = classNames(
      'slc-field',
      {
        'slc-field--without-border': !border,
        'slc-field__textarea-padding': textareaType == 'textarea' && !label,
        'slc-field-card': card
      },
      className
    )

    const containerCls = classNames('slc-field__container', {
      'slc-field--error': error,
      'slc-field--disabled': disabled,
      'slc-field__content-textarea': textareaType == 'textarea'
    })

    const placeholderCls = classNames('placeholder', placeholderClass)

    const labelCls = classNames(
      'slc-field__title', {
        'slc-field__title--required': required
      }, labelClass
    )

    const leftIconCls = classNames('slc-field__title--left-icon')

    const labelStyle = {
      'width': pxTransform(labelWidth),
      'text-align': labelAlign
    }

    const id = name && { id: name }

    const nameProps = name ? { name } : {}
    return (
      <View className={rootCls} style={customStyle}>
        <View className={containerCls} onClick={this.handleClick}>
          {(label || leftIcon) && (
            <Label
            className={labelCls}
            style={labelStyle}
            for={name}
            >
              {leftIcon && <SlIcon className={leftIconCls} value={leftIcon} color="#999999" size={ 16 }></SlIcon>}
              {label}
            </Label>
          )}
          {
            textareaType === 'textarea' ? 
              <Fragment>
                <Textarea 
                  className='slc-field__textarea'
                  { ...id }
                  { ...nameProps }
                  style={ `color: ${ contentColor };${textareaHeight ? `height: ${pxTransform(textareaHeight)}`: ''}` }
                  disabled={disabled || readonly}
                  placeholderStyle={placeholderStyle}
                  placeholderClass={classNames('slc-field__box-textarea__ph', placeholderCls)}
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
                  onInput={this.handleInput}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onConfirm={this.handleConfirm}
                  onKeyboardHeightChange={this.handleKeyboardHeightChange}
                />
                { showWordLimit && 
                  <View className="slc-field__word-limit">
                    <Text className="slc-field__word-num">{(value || '').length}</Text>
                    /{maxlength}
                  </View>
                }
              </Fragment> 
              : <Fragment>
                <Input
                  className='slc-field__input'
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
                  onInput={this.handleInput}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onConfirm={this.handleConfirm}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                  // @ts-ignore
                  onKeyboardHeightChange={this.handleKeyboardHeightChange}
                />
                {clear && value && (
                  <View className='slc-field__icon' onClick={this.handleClearValue}>
                    {/* <Text className='slc-icon slc-icon-close-circle slc-field__icon-close'></Text> */}
                    <SlIcon value='close-circle' color="#999999" size={ 16 }></SlIcon>
                  </View>
                )}
                {!clear && rightIcon &&
                  <View className='slc-field__icon' onClick={() => this.props.onRightIconClick}>
                    <SlIcon value={rightIcon} color="#999999" size={ 16 }></SlIcon>
                  </View>  
                }
                {error && (
                  <View
                    className='slc-field__error'
                    style={`padding-left: ${pxTransform(labelWidth)};width: 100%`}
                    onTouchStart={this.handleErrorClick}
                  >
                    <Text>{errorMessage || `${label}必填`}</Text>
                  </View>
                )}
                {/* <View className='slc-field__children'>{this.props.children}</View> */}
              </Fragment>
          }
          {
            children && children
          }
        </View>
      </View>
    )
  }
}

SlField.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  label: '',
  cursorSpacing: 50,
  confirmType: 'done',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: -1,
  type: 'text',
  disabled: false,
  border: true,
  readonly: false,
  error: false,
  clear: false,
  autoFocus: false,
  autoHeight: false,
  textareaHeight: 160,
  fixed: false,
  focus: false,
  contentColor: '#333333',
  required: false,
  isLink: false,
  linkText: '',
  linkSlot: '',
  labelClass: '',
  labelWidth: 190,
  labelAlign: 'left',
  valueAlign: 'left',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {},
  onLink: (): void => {}
}
