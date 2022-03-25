import classNames from 'classnames'
import React, { FC, useState } from 'react'
import { Input, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { SearchBarProps } from './type'
import Icon from '../icon'
import { CssPrefix } from '../../common'
import CompContainer from '../../common/comp-container'

const SearchBar: FC<SearchBarProps> = ({
  value = '',
  placeholder = '搜索',
  maxLength = 140,
  fixed = false,
  inputAlign = "right",
  focus = false,
  disabled = false,
  cancelText = '取消',
  inputType = 'text',
  shape = "round",
  onChange = () => { },
  onFocus = () => { },
  onBlur = () => { },
  onConfirm = () => { },
  onCancel = () => { },
  onClear,
  showCancel,
  background,
  className,
  customizeStyle
}
) => {

  const [isFocus, setIsFocus] = useState(!!focus)

  const handleFocus = (event: CommonEvent): void => {
    setIsFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur = (event: CommonEvent): void => {
    setIsFocus(false)
    onBlur && onBlur(event)
  }

  const handleChange = (e): void => {
    onChange(e.detail.value, e)
  }

  const handleClear = (event: CommonEvent): void => {
    if (onClear) {
      onClear(event)
    } else {
      onChange('', event)
    }
  }

  const handleConfirm = (event: CommonEvent): void => {
    onConfirm && onConfirm(event)
  }

  const handleCancelClick = (event: CommonEvent): void => {
    onChange('', event)
    onCancel && onCancel(event)
  }

  const fontSize = 14
  const rootCls = classNames(
    `${CssPrefix}-search-bar`,
    {
      [`${CssPrefix}-search-bar--fixed`]: fixed
    },
    className
  )
  const placeholderWrapStyle: any = {}
  const actionStyle: any = {
    opacity: 0
  }

  if (showCancel) {
    actionStyle.opacity = 1
    actionStyle.marginRight = `0`
  } else {
    actionStyle.opacity = 0
    actionStyle.marginRight = `-${(cancelText!.length + 1) * fontSize +
      fontSize / 2 +
      10}px`
  }

  if (isFocus || value) {
    if (inputAlign === 'center') placeholderWrapStyle.flexGrow = 0
  } else if (!isFocus && !value) {
    if (inputAlign === 'center') placeholderWrapStyle.flexGrow = 1
  }

  const clearIconStyle: any = { display: 'flex' }
  const placeholderStyle: any = { visibility: 'hidden' }
  if (!value.length) {
    clearIconStyle.display = 'none'
    placeholderStyle.visibility = 'visible'
  }

  return (
    <CompContainer className={rootCls} style={background ? { backgroundColor: background }: {}} customizeStyle={customizeStyle}>
      <View className={classNames(
        [`${CssPrefix}-search-bar__input-cnt`],
        {
          [`${CssPrefix}-search-bar__input-cnt__round`]: shape === 'round'
        }
      )}>
        <View
          className={`${CssPrefix}-search-bar__placeholder-wrap`}
          style={placeholderWrapStyle}
        >
          <Icon value='search' />
          <Text
            className={`${CssPrefix}-search-bar__placeholder`}
            style={placeholderStyle}
          >
            {isFocus || value ? '' : placeholder}
          </Text>
        </View>
        <Input
          className={`${CssPrefix}-search-bar__input`}
          type={inputType}
          confirmType='search'
          value={value}
          focus={isFocus}
          disabled={disabled}
          maxlength={maxLength}
          onInput={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onConfirm={handleConfirm}
        />
        <View
          className={`${CssPrefix}-search-bar__clear`}
          style={clearIconStyle}
          onClick={handleClear}
        >
          <Icon value='close-circle' />
        </View>
      </View>
      {showCancel && <View
        className={`${CssPrefix}-search-bar__action`}
        style={actionStyle}
        onClick={handleCancelClick}
      >
        {cancelText}
      </View>
      }
    </CompContainer>
  )
}

export default SearchBar