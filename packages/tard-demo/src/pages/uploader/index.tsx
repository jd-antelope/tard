import React, { useState } from 'react'
import { FC } from '@tarojs/taro'
import { SlUploader } from 'tard'
import { View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'

const Media: FC = () => {
  const [videos, setVideos] = useState<any>([]);
  const [iamges, setImages] = useState<any>([])
  return (
    <View className="container full-container">
      <DocsHeader title='Uploader 文件上传' />
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlUploader
            mediaType="video"
            multiple
            length={2} maxCount={1}
            files={videos} onChange={(v) => { setVideos(v) }}
          />
          <SlUploader
            mediaType="camera" length={2} count={3}
            files={iamges} onChange={(v) => { setImages(v) }}
          />
          <SlUploader
            mediaType="camera" length={2} count={3}
            files={iamges} onChange={(v) => { setImages(v) }}
          >测试文本</SlUploader>
        </View>
      </View>
    </View>
  )
}

export default Media