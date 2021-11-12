
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

  private handleLink = (): void => {
    if (isFunction(this.props.onLink)) {
      this.props.onLink()
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
      title,
      error,
      clear,
      placeholder,
      placeholderStyle,
      placeholderClass,
      autoFocus,
      focus,
      value,
      required,
      children,
      readonly,
      linkText,
      isLink,
      contentColor,
      linkSlot,
      labelClass,
      labelWidth = 144,
      labelAlign,
      autoHeight
    } = this.props
    const { type, maxlength, disabled, password } = getInputProps(this.props)

    const { type: textareaType, fixed } = getTextareaProps(this.props)

    const rootCls = classNames(
      'slc-field',
      {
        'slc-field--without-border': !border,
        'slc-field__textarea-padding': textareaType == 'textarea' && !title
      },
      className
    )

    const containerCls = classNames('slc-field__container', {
      'slc-field--error': error,
      'slc-field--disabled': disabled,
      'slc-field__content-textarea': textareaType == 'textarea'
    })

    const overlayCls = classNames('slc-field__overlay', {
      'slc-field__overlay--hidden': !disabled
    })

    const placeholderCls = classNames('placeholder', placeholderClass)

    const labelCls = classNames(
      'slc-field__title', {
        'slc-field__title--required': required
      }, labelClass
    )

    const labelStyle = {
      'width': pxTransform(labelWidth),
      'text-align': labelAlign
    }

    const id = name && { id: name }

    const nameProps = name ? { name } : {}
    return (
      <View className={rootCls} style={customStyle}>
        <View className={containerCls}>
          <View className={overlayCls} onClick={this.handleClick}></View>
          {title && (
            <Label
              className={labelCls}
              style={labelStyle}
              for={name}
            >
              {title}
            </Label>
          )}
          {
            children ? 
              children : (readonly || isLink) ? 
              <View className="slc-field__content" onClick={this.handleLink}>
                <View className="slc-field__content-title" style={ `color: ${contentColor}` }>
                  <Input
                    className='slc-field__input'
                    { ...id }
                    { ...nameProps }
                    value={value}
                    confirmType={confirmType}
                    disabled
                  />
                </View>
                {
                  isLink && 
                  <View className="slc-field__content-link">
                    {
                      linkSlot !== '' ? linkSlot : <Text>{linkText}</Text>
                    }
                    
                    <SlIcon value='chevron-right' color="#999999" size={ 16 }></SlIcon>
                  </View>
                }
              </View>
              : textareaType === 'textarea' ? 
                <View className={ classNames('slc-field__box', { 'slc-field__box-title' : !title }) }>
                  <Textarea 
                    className='slc-field__box-textarea'
                    { ...id }
                    { ...nameProps }
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
                  <View className="slc-field__box-number">
                    <Text className="slc-field__box-number__active">{(value || '').length}</Text>
                    /{maxlength}
                  </View>
                </View>
                
              :
              <Fragment>
                <Input
                  className='slc-field__input'
                  { ...id }
                  { ...nameProps }
                  type={type}
                  password={password}
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
                  <View className='slc-field__icon' onTouchEnd={this.handleClearValue}>
                    <Text className='slc-icon slc-icon-close-circle slc-field__icon-close'></Text>
                  </View>
                )}
                {error && (
                  <View
                    className='slc-field__icon'
                    onTouchStart={this.handleErrorClick}
                  >
                    <Text className='slc-icon slc-icon-alert-circle slc-field__icon-alert'></Text>
                  </View>
                )}
                {/* <View className='slc-field__children'>{this.props.children}</View> */}
              </Fragment>
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
  title: '',
  cursorSpacing: 50,
  confirmType: 'done',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  readonly: false,
  error: false,
  clear: false,
  autoFocus: false,
  autoHeight: false,
  fixed: false,
  focus: false,
  contentColor: '#333333',
  required: false,
  isLink: false,
  linkText: '',
  linkSlot: '',
  labelClass: '',
  labelWidth: 144,
  labelAlign: 'left',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {},
  onLink: (): void => {}
}
