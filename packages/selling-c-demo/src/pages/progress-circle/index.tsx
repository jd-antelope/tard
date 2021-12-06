import React from 'react'
import { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { SlProgressCircle } from 'tard'
import DocsHeader from '../../components/doc-header'

const Person: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='SlProgressCircle'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基本用法</View>
        <SlProgressCircle percent={25} text="25%" />

        <View className='doc-body-content-tip'>自定义颜色</View>
        <SlProgressCircle percent={25} color="#FF2929" text="自定义颜色" />

        <View className='doc-body-content-tip'>自定义圆环直径</View>
        <SlProgressCircle percent={25} size={300} text="圆环直径" />

        <View className='doc-body-content-tip'>自定义进度条宽度</View>
        <SlProgressCircle percent={25} strokeWidth={10} text="进度条宽度" />

      </View>
    </View>
  )
}

export default Person