import { Fragment, useState } from 'react'
import { View, Image } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro';
import { Icon, ConfigProvider } from 'tard'
import './index.less'
import MenuObj from '../../docs-route'
import { isWeb } from '../../utils'

function Home() {
  const [itemActive, setItemAcitve] = useState<boolean>(false)
  const [key, setKey] = useState<string>('')
  const postIframeParentMessage = (path: string) => {
    if (isWeb) {
      window.parent.postMessage({ path }, '*');
    }
  }
  const changeTheme = () => {
    ConfigProvider.config({
        theme: {
            'color-primary': 'purple',
            // 'border-radius-md': '20px',
            "button-radius": '20px'
        }
    });
}

  return (
    <View className='index-container'>
      <View className='title'>
        <Image className='logo' style={isWeb ? '' : 'margin-top: 0'} src='https://storage.360buyimg.com/hawley-common/tard-image/logo.png' />
        <View className='logo-des'>一套基于Taro框架开发的多端React UI组件库</View>
      </View>

      <View className='comp'>
        {MenuObj.routes.map(v => (
          <Fragment key={v.nameEn}>
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
                  onTouchStart={() => {
                    setKey(val.path)
                    setItemAcitve(true)
                  }}
                  onTouchEnd={() => {
                    setItemAcitve(false)
                  }}
                >
                  <View className='comp-item-text'>{val.nameEn} {val.name}</View>
                  <Icon value='chevron-right' color={itemActive && key === val.path ? "#fff": "#999"} size={16}></Icon>
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
