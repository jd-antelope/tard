import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { ConfigProviderProps } from './type'

const ConfigProvider: FC<ConfigProviderProps> = ({ style, className, children }) => {
  return (
    <View className={className} style={style}>
      {children}
    </View>
  )
}

export default ConfigProvider