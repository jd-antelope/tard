import React from 'react'
import { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ProgressCircle } from 'tard'
import DocsHeader from '../../components/doc-header'

const Person: FC = () => {
  return (
    <View className="container full-container">
      <DocsHeader title='ProgressCircle 圆形进度条'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info'>
          <ProgressCircle percent={25} text="25%" />
        </View>

        <View className='doc-body-content-tip'>自定义颜色</View>
        <View className='doc-body-content__info'>
          <ProgressCircle percent={25} color="#FF2929" text="自定义颜色" />
        </View>

        <View className='doc-body-content-tip'>自定义圆环直径</View>
        <View className='doc-body-content__info'>
          <ProgressCircle percent={25} size={300} text="圆环直径" />
        </View>

        <View className='doc-body-content-tip'>自定义进度条宽度</View>
        <View className='doc-body-content__info'>
          <ProgressCircle percent={50} strokeWidth={10} text="进度条宽度" />
        </View>

      </View>
    </View>
  )
}

export default Person