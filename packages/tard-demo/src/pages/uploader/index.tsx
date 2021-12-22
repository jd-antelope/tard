import React, { useState } from 'react'
import { FC } from '@tarojs/taro'
import { SlUploader } from 'tard'
import { View } from '@tarojs/components'

const Media: FC = () => {
  const [videos, setVideos] = useState<any>([]);
  const [iamges, setImages] = useState<any>([])
  return (
    <View>
      <SlUploader
        mediaType="video" 
        multiple
        length={ 2} maxCount={1}
         files={ videos } onChange={ (v) => {setVideos(v)} }
      />
         <SlUploader
        mediaType="camera" length={ 2 } count={ 3 }
         files={ iamges } onChange={ (v) => {setImages(v)} }
      />
         <SlUploader
        mediaType="camera" length={ 2 } count={ 3 }
         files={ iamges } onChange={ (v) => {setImages(v)} }
      >测试文本</SlUploader>
    </View>
  )
}

export default Media