import React, { Fragment } from 'react'
import { View, Image } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro';
import { SlIcon } from '@test/selling-c-ui'
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
        <Image className='logo' src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
        <View className="logo-des">一套基于Taro框架开发的多端React UI组件库</View>
      </View>
      <View className='comp'>
        {MenuObj.routes.map(v => (
          <Fragment>
            <View
              className='comp-item-parent'
              key={v.nameEn}
            >{v.name}</View>
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
                >
                  <View className="comp-item-text">{val.nameEn} {val.name}</View>
                  <SlIcon value="chevron-right" color="#333" size={16}></SlIcon>
                </View>
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
