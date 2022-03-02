import { Fragment, useState } from 'react'
import { View, Image } from '@tarojs/components'
import './index.less'
import MenuObj from '../../constants/docs-route'

function Home () {
  const [itemActive, setItemAcitve] = useState<boolean>(false)
  const [key, setKey] = useState<string>('')
  const postIframeParentMessage = (path: string) => {
    window.parent.postMessage({ path }, '*')
  }

  return (
    <div className="index-container">
      <View className="title">
        <img className="logo" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
        <View className="logo-des">一套基于Taro框架开发的多端React UI组件库</View>
      </View>
      <View className="comp">
        {MenuObj.routes.map(v => (
          <Fragment key={ v.nameEn }>
            <View
              className="comp-item-parent"
              key={ v.nameEn }
            >{v.name}</View>
            {
              v.children.map(val => (
                <View
                  className="comp-item"
                  key={ val.nameEn }
                  onClick={ () => {
                    console.log('postIframeParentMessage')
                    postIframeParentMessage(val.path)
                  } }
                  onTouchStart={ () => {
                    setKey(val.path)
                    setItemAcitve(true)
                  } }
                  onTouchEnd={ () => {
                    setItemAcitve(false)
                  } }
                >
                  <View className="comp-item-text">{val.nameEn} {val.name}</View>
                </View>
              ))
            }
          </Fragment>
        ))
        }
      </View>
    </div>
  )
}

export default Home
