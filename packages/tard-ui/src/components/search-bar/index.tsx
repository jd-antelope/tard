import classNames from 'classnames'
import React from 'react'
import { Input, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { SlSearchBarProps, SlSearchBarState } from '../../../types/search-bar'
import SlIcon from '../icon'

type ExtendEvent = {
  target: {
    value: string
  }
}

export default class SlSearchBar extends React.Component<
  SlSearchBarProps,
  SlSearchBarState
> {
  public static defaultProps: SlSearchBarProps

  public constructor(props: SlSearchBarProps) {
    super(props)
    this.state = {
      isFocus: !!props.focus
    }
  }

  private handleFocus = (event: CommonEvent): void => {
    this.setState({
      isFocus: true
    })
    this.props.onFocus && this.props.onFocus(event)
  }

  private handleBlur = (event: CommonEvent): void => {
    this.setState({
      isFocus: false
    })
    this.props.onBlur && this.props.onBlur(event)
  }

  private handleChange = (e: CommonEvent & ExtendEvent): void => {
    this.props.onChange(e.target.value, e)
  }

  private handleClear = (event: CommonEvent): void => {
    if (this.props.onClear) {
      this.props.onClear(event)
    } else {
      this.props.onChange('', event)
    }
  }

  private handleConfirm = (event: CommonEvent): void => {
    this.props.onConfirm && this.props.onConfirm(event)
  }

  private handleCancelClick = (event: CommonEvent): void => {
    this.props.onChange('', event)
    this.props.onCancel && this.props.onCancel(event)
  }

  public render(): JSX.Element {
    const {
      value,
      placeholder,
      maxLength,
      fixed,
      disabled,
      cancelText,
      showCancel,
      inputType, // 处理issue#464
      className,
      background,
      shape,
      inputAlign
    } = this.props
    const { isFocus } = this.state
    const fontSize = 14
    const rootCls = classNames(
      'sl-search-bar',
      {
        'sl-search-bar--fixed': fixed
      },
      className
    )
    const placeholderWrapStyle: React.CSSProperties = {}
    const actionStyle: React.CSSProperties = {}

    if (showCancel) {
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
    } else {
      actionStyle.opacity = 0
      actionStyle.marginRight = `-${(cancelText!.length + 1) * fontSize +
        fontSize / 2 +
        10}px`
    }

    if (isFocus || (!isFocus && value)) {
      if (inputAlign === 'center') placeholderWrapStyle.flexGrow = 0
    } else if (!isFocus && !value) {
      if (inputAlign === 'center') placeholderWrapStyle.flexGrow = 1
    }

    const clearIconStyle: React.CSSProperties = { display: 'flex' }
    const placeholderStyle: React.CSSProperties = { visibility: 'hidden' }
    if (!value.length) {
      clearIconStyle.display = 'none'
      placeholderStyle.visibility = 'visible'
    }

    return (
      <View className={rootCls} style={{ background }}>
        <View className={classNames(
          'sl-search-bar__input-cnt',
          {
            'sl-search-bar__input-cnt__round': shape === 'round'
          }
        )}>
          <View
            className='sl-search-bar__placeholder-wrap'
            style={placeholderWrapStyle}
          >
            <SlIcon value='search' />
            <Text
              className='sl-search-bar__placeholder'
              style={placeholderStyle}
            >
              {isFocus ? '' : placeholder}
            </Text>
          </View>
          <Input
            className='sl-search-bar__input'
            type={inputType}
            confirmType='search'
            value={value}
            focus={isFocus}
            disabled={disabled}
            maxlength={maxLength}
            onInput={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleConfirm}
          />
          <View
            className='sl-search-bar__clear'
            style={clearIconStyle}
            onClick={this.handleClear}
          >
            <SlIcon value='close-circle' />
          </View>
        </View>
        {showCancel && <View
          className='sl-search-bar__action'
          style={actionStyle}
          onClick={this.handleCancelClick}
        >
          {cancelText}
        </View>
        }
      </View>
    )
  }
}

SlSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  inputAlign: "right",
  focus: false,
  disabled: false,
  cancelText: '取消',
  inputType: 'text',
  shape: "round",
  onChange: () => { },
  onFocus: () => { },
  onBlur: () => { },
  onConfirm: () => { },
  onCancel: () => { }
}
