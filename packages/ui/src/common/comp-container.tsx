import React, { CSSProperties, FC, useEffect, useState, useCallback } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { transformationString } from '../utils'
import { isObject } from '../utils/is'

type CommonProps = {
  className?: string,
  style?: CSSProperties | string,
  customizeStyle?: string,
  [propName: string]: any
}

const CompContainer: FC<CommonProps> = ({
  className = '',
  style = '',
  customizeStyle = '',
  children = '',
  ...rest
}) => {
  const [themeStyle, setThemeStyle] = useState<string>('')

  const setThemeStyleFn = useCallback(() => {
    if (!(Taro as any).Current.app || !(Taro as any).Current.app.themeParams) return
    const { themeParams } = (Taro as any).Current.app
    let themeStyleStr = ''

    for (const item in themeParams) {
      themeStyleStr += `--${item}: ${themeParams[item]};`
    }

    setThemeStyle(themeStyleStr)
  }, [])

  useEffect(() => {
    setThemeStyleFn()
  }, [])

  const styleString = isObject(style) ? transformationString(style) : style

  return (
    <View className={className} style={styleString + themeStyle + customizeStyle} {...rest}>
      {children}
    </View>
  )
}

export default CompContainer
