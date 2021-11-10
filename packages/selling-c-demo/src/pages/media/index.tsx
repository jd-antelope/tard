import React, { useState } from 'react'
import { FC } from '@tarojs/taro'
import { SlMedia } from '@test/selling-c-ui'
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
    </View>
  )
}

export default Media