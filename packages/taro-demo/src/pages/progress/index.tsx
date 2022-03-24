import React from 'react'
import { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Progress } from 'tard'
import DocsHeader from '../../components/doc-header'

const Person: FC = () => {
  return (
    <View className="container full-container">
      <DocsHeader title='Progress'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info'>
          <Progress percent={30} />
        </View>

        <View className='doc-body-content-tip'>自定义线条粗细</View>
        <View className='doc-body-content__info'>
          <Progress percent={30} strokeWidth={8} />
        </View>

        <View className='doc-body-content-tip'>自定进度条颜色</View>
        <View className='doc-body-content__info'>
          <Progress color="#FF2929" percent={70} />
        </View>

        <View className='doc-body-content-tip'>自定状态</View>
        <View className='doc-body-content__info'>
          <Progress color="#FF2929" percent={70} status="error" />
        </View>

        <View className='doc-body-content-tip'>自定文案</View>
        <View className='doc-body-content__info'>
          <Progress percent={70} pivotText="700/1000" />
        </View>

        <View className='doc-body-content-tip'>自定隐藏文案</View>
        <View className='doc-body-content__info'>
          <Progress percent={70} showPivot={false} />
        </View>

      </View>
    </View>
  )
}

export default Person