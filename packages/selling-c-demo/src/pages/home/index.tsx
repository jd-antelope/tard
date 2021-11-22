import React, { useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import { navigateTo, pxTransform } from '@tarojs/taro';
import './index.less'
import MenuObj from '../../docs-route'
import { isWeb } from '../../utils'
function Home() {
  const iframeListener = (e: any) => {
    const activeMenu = e.data.title
    if (activeMenu) {
      navigateTo({
        url: `/pages/${activeMenu}/index`
      });
    }
  }

  useEffect(() => {
    if (isWeb) {
      window.addEventListener("message", iframeListener, false);
    }
  })

  const postIframeParentMessage = (title: string) => {
    if (isWeb) {
      window.parent.postMessage({ title }, '*');
    }
  }

  return (
    <View className='container'>
      <View className='title'>
        <Image className='logo' src="https://img14.360buyimg.com/imagetools/jfs/t1/159678/7/15538/12373/605c0737Ef5035728/36f752fdd6a999e9.png" />selling-ui
      </View>
      <View className='comp'>
        {MenuObj.map(item => (
          <View
            className='comp-item'
            key={item.title}
            onClick={() => {
              postIframeParentMessage(item.title)
              navigateTo({
                url: `/pages/${item.title}/index`
              });
            }}
          >{item.title}</View>
        ))
        }
      </View>
    </View>
  )
}

export default Home
