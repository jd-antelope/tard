import React, { Fragment } from 'react'
import { View, Image } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro';
import './index.less'
import MenuObj from '../../docs-route'
import { isWeb } from '../../utils'
function Home() {
  const postIframeParentMessage = (path: string) => {
    if (isWeb) {
      window.parent.postMessage({ path }, '*');
    }
  }

  return (
    <View className='container'>
      <View className='title'>
        <Image className='logo' src="https://img14.360buyimg.com/imagetools/jfs/t1/159678/7/15538/12373/605c0737Ef5035728/36f752fdd6a999e9.png" />selling-ui
      </View>
      <View className='comp'>
        {MenuObj.routes.map(v => (
          <Fragment>
            <View
              className='comp-item comp-item-partent'
              key={v.nameEn}
            >{v.nameEn}</View>
            {
              v.children.map(val => (
                <View
                  className='comp-item'
                  key={val.nameEn}
                  onClick={() => {
                    postIframeParentMessage(val.path)
                    navigateTo({
                      url: `/pages${val.path}/index`
                    });
                  }}
                >{val.nameEn}</View>
              ))
            }
            </Fragment>
        ))
        }
      </View>
    </View>
  )
}

export default Home
