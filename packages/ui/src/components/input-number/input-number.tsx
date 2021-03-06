import React, { FC } from 'react'
import classNames from 'classnames'
import { Input, Text, View } from '@tarojs/components'
import { pxTransform } from '../../utils'
import { InputNumberProps } from './type'
import { cssPrefix } from '../../common'
import CompContainer from '../../common/comp-container'

// TODO: Check all types

// 实现两数相加并保留小数点后最短尾数
function addNum(num1: number, num2: number): number {
  let sq1: number, sq2: number
  try {
    sq1 = String(num1).split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = String(num2).split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  const m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num: string): string {
  if (num === '') return '0'

  const numStr = String(num)
  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return String(parseFloat(num))
  }
  return String(num)
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
  onChange = () => { },
  onBlur = (): void => { },
  onErrorInput = (): void => { },
  customizeStyle
}) => {
  const CssPrefix = cssPrefix()
  const handleClick = (clickType: 'minus' | 'plus', e): void => {
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
    const deltaValue = clickType === 'minus' ? -step : step
    let newValue = addNum(Number(value), deltaValue)
    newValue = Number(handleValue(newValue))
    onChange(newValue, e)
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
    `${CssPrefix}-input-number`,
    {
      [`${CssPrefix}-input-number--lg`]: size === 'large'
    },
    className
  )
  const minusBtnCls = classNames(`${CssPrefix}-input-number__btn`, {
    [`${CssPrefix}-input-number--disabled`]: inputValue <= min || disabled
  })
  const plusBtnCls = classNames(`${CssPrefix}-input-number__btn`, {
    [`${CssPrefix}-input-number--disabled`]: inputValue >= max || disabled
  })

  return (
    <CompContainer className={rootCls} customizeStyle={customizeStyle}>
      <View
        className={minusBtnCls}
        onClick={(e) => handleClick('minus', e)}
      >
        <Text className={`${CssPrefix}-icon ${CssPrefix}-icon-subtract ${CssPrefix}-input-number__btn-subtract`}>-</Text>
      </View>
      <Input
        className={`${CssPrefix}-input-number__input`}
        style={inputStyle}
        type={type}
        value={String(inputValue)}
        disabled={readonly || disabled}
        onInput={handleInput}
        onBlur={handleBlur}
      />
      <View
        className={plusBtnCls}
        onClick={(e) => handleClick('plus', e)}
      >
        <Text className={`${CssPrefix}-icon ${CssPrefix}-icon-add ${CssPrefix}-input-number__btn-add`}>+</Text>
      </View>
    </CompContainer>
  )
}

export default InputNumber

