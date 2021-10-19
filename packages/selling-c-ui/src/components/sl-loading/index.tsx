
import React, { memo } from 'react'
import { View } from '@tarojs/components'
import { FC } from '@tarojs/taro'
import { SlLoadingProps } from '../../../types/loading'

const SlLoading: FC<SlLoadingProps> = () => {
  return (
    <View className="aaa">111</View>
  )
}

export default memo(SlLoading)
