import React, { FC } from 'react'
import classNames from 'classnames'
import _toString from 'lodash/toString'
import { Input, Text, View } from '@tarojs/components'
import { pxTransform } from '../../common/utils'
import { InputNumberProps } from './type'
import CompContainer from '../../common/comp-container'

// TODO: Check all types

// 实现两数相加并保留小数点后最短尾数
function addNum(num1: number, num2: number): number {
  let sq1: number, sq2: number
  try {
    sq1 = _toString(num1).split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = _toString(num2).split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  const m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num: string): string {
  if (num === '') return '0'

  const numStr = _toString(num)
  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return _toString(parseFloat(num))
  }
  return _toString(num)
}

const InputNumber: FC<InputNumberProps> = ({
  className,
  disabled = false,
  readonly = false,
  value = 0,
  type = 'number',
  width = 0,
  min = 0,
  max = 9999,
  step = 1,
  size = 'normal',
  onChange = (): void => { },
  onBlur = (): void => { },
  onErrorInput = (): void => { },
  customizeStyle,
  customStyle
}) => {

  const handleClick = (clickType: 'minus' | 'plus'): void => {
    const lowThanMin = clickType === 'minus' && value <= min
    const overThanMax = clickType === 'plus' && value >= max
    if (lowThanMin || overThanMax || disabled) {
      const deltaValue = clickType === 'minus' ? -step : step
      const errorValue = addNum(Number(value), deltaValue)
      if (disabled) {
        handleError({
          type: 'DISABLED',
          errorValue
        })
      } else {
        handleError({
          type: lowThanMin ? 'LOW' : 'OVER',
          errorValue
        })
      }
      return
    }
  }

  const handleValue = (value: string | number): string => {
    let resultValue = value === '' ? min : value
    // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
    if (resultValue > max) {
      resultValue = max
      handleError({
        type: 'OVER',
        errorValue: resultValue
      })
    }
    if (resultValue < min) {
      resultValue = min
      handleError({
        type: 'LOW',
        errorValue: resultValue
      })
    }
    if (resultValue && !Number(resultValue)) {
      resultValue = parseFloat(String(resultValue)) || min

      handleError({
        type: 'OVER',
        errorValue: resultValue
      })
    }

    resultValue = parseValue(String(resultValue))
    return resultValue
  }

  const handleInput = (e): string => {
    const { value } = e.target
    if (disabled) return ''

    const newValue = handleValue(value)
    onChange(Number(newValue), e)
    return newValue
  }

  const handleBlur = (event): void =>
    onBlur && onBlur(event)

  const handleError = (errorValue): void => {
    if (!onErrorInput) {
      return
    }
    onErrorInput(errorValue)
  }

  const inputStyle = {
    width: width ? `${pxTransform(width)}` : ''
  }
  const inputValue = Number(handleValue(value))
  const rootCls = classNames(
    'slc-input-number',
    {
      'slc-input-number--lg': size === 'large'
    },
    className
  )
  const minusBtnCls = classNames('slc-input-number__btn', {
    'slc-input-number--disabled': inputValue <= min || disabled
  })
  const plusBtnCls = classNames('slc-input-number__btn', {
    'slc-input-number--disabled': inputValue >= max || disabled
  })

  return (
    <CompContainer className={rootCls} style={customStyle} customizeStyle={customizeStyle}>
      <View
        className={minusBtnCls}
        onClick={handleClick.bind(this, 'minus')}
      >
        <Text className='slc-icon slc-icon-subtract slc-input-number__btn-subtract'></Text>
      </View>
      <Input
        className='slc-input-number__input'
        style={inputStyle}
        type={type}
        value={String(inputValue)}
        disabled={readonly || disabled}
        onInput={handleInput}
        onBlur={handleBlur}
      />
      <View
        className={plusBtnCls}
        onClick={handleClick.bind(this, 'plus')}
      >
        <Text className='slc-icon slc-icon-add slc-input-number__btn-add'></Text>
      </View>
    </CompContainer>
  )
}

export default InputNumber

