import React, { FC, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { ConfigProviderProps } from './type'

const ConfigProvider: FC<ConfigProviderProps> = ({ style, className, children }) => {
  const [customStyle, setCustomStyle] = useState<string>('')

  useEffect(() => {
    let themeStyle = ''
    for (const item in style) {
      themeStyle += `--${item}: ${style[item]};`
    }
    setCustomStyle(themeStyle)
  }, [style])

  // 给组件套入配置组件
  const content = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null
    }
    const childProps = {
      ...child.props,
      customizeStyle: customStyle
    }
    return React.cloneElement(child, childProps)
  })

  return (
    <View className={className} style={customStyle}>
      {content}
    </View>
  )
}

export default ConfigProvider