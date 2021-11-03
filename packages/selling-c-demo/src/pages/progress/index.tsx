import React, { useEffect } from 'react'
import { FC, createCanvasContext } from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import { SlProgress } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'

const Person: FC = () => {
  useEffect(() => {
    // const context = createCanvasContext('visitor_canvas')
    // context.fillRect(50,50,200,200)  // x轴 y轴 宽 和 高 ,绘制“被填充”的矩形
    // context.fillStyle = 'green'  // 设置或返回用于填充绘画的颜色、渐变或模式
    // context.draw()
  })
  return (
    <View className="container">
      <DocsHeader title='SlProgress'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlProgress percent={30} />

        <View className='doc-body-content-tip'>自定义线条粗细</View>
        <SlProgress percent={30} strokeWidth={8} />

        <View className='doc-body-content-tip'>自定进度条颜色</View>
        <SlProgress color="#FF2929" percent={70} />

        <View className='doc-body-content-tip'>自定状态</View>
        <SlProgress color="#FF2929" percent={70} status="error" />

        <View className='doc-body-content-tip'>自定文案</View>
        <SlProgress percent={70} pivotText="700/1000" />

        <View className='doc-body-content-tip'>自定隐藏文案</View>
        <SlProgress percent={70} showPivot={false} />
      </View>
    </View>
  )
}

export default Person