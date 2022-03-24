import React, { useState } from 'react'
import { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Uploader } from 'tard'
import DocsHeader from '../../components/doc-header'

const UploaderPage: FC = () => {
  const [videos, setVideos] = useState<any>([]);
  const [iamges, setImages] = useState<any>([])
  const [iamges1, setImages1] = useState<any>([])
  return (
    <View className="container full-container">
      <DocsHeader title='Uploader 文件上传' />
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Uploader
            mediaType="video"
            multiple
            length={3} maxCount={1}
            files={videos} onChange={(v) => { setVideos(v) }}
          />
        </View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Uploader
            mediaType="camera" length={3} count={3}
            files={iamges} onChange={(v) => { setImages(v) }}
          />
        </View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Uploader
            mediaType="camera" length={3} count={3}
            files={iamges1} onChange={(v) => { setImages1(v) }}
          >
            <View>测试文本</View>
          </Uploader>
        </View>
      </View>
    </View>
  )
}

export default UploaderPage