import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro';
import './index.less'
import MenuObj from '../../docs-route'

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
    window.addEventListener("message", iframeListener, false);
  })

  const postIframeParentMessage = (title: string) => {
    window.parent.postMessage({ title }, '*');
  }

  return (
    <View className='container'>
      <View className='title'>
        <img className='logo' src="https://img14.360buyimg.com/imagetools/jfs/t1/159678/7/15538/12373/605c0737Ef5035728/36f752fdd6a999e9.png" />selling-ui
      </View>
      <View className='comp'>
        {MenuObj.map(item => (
          <a key={item.title} href={`#/pages/${item.title}/index`} onClick={() => postIframeParentMessage(item.title)} className='comp-item'>{item.title}</a>
        ))
        }
      </View>
    </View>
  )
}

export default Home
