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

  const setThemeStyleFn = useCallback((data) => {
    const themeParams = data
    let themeStyleStr = ''

    for (const item in themeParams) {
      themeStyleStr += `--${item}: ${themeParams[item]};`
    }
    setThemeStyle(themeStyleStr)
  }, [])

  useEffect(() => {
    setThemeStyleFn((Taro as any).Current.app.themeParams);
    // setThemeStyleFn();
    (Taro as any).Current.app.eventCenter.on('THEME_CHANGE', (data) => {
      setThemeStyleFn(data);
    });
    return () => {
      (Taro as any).Current.app.eventCenter.removeListener('THEME_CHANGE')
    }
  }, [])

  const styleString = isObject(style) ? transformationString(style) : style

  return (
    <View className={className} style={styleString + themeStyle + customizeStyle} {...rest}>
      {children}
    </View>
  )
}

export default CompContainer
