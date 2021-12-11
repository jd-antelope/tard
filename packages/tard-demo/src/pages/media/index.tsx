import React, { useState } from 'react'
import { FC } from '@tarojs/taro'
import { SlMedia } from 'tard'
import { View } from '@tarojs/components'

const Media: FC = () => {
  const [videos, setVideos] = useState<any>([]);
  const [iamges, setImages] = useState<any>([])
  return (
    <View>
      <SlMedia
        mediaType="video" 
        multiple
        length={ 2} maxCount={1}
         files={ videos } onChange={ (v) => {setVideos(v)} }
      />
         <SlMedia
        mediaType="camera" length={ 2 } count={ 3 }
         files={ iamges } onChange={ (v) => {setImages(v)} }
      />
         <SlMedia
        mediaType="camera" length={ 2 } count={ 3 }
         files={ iamges } onChange={ (v) => {setImages(v)} }
      >测试文本</SlMedia>
    </View>
  )
}

export default Media