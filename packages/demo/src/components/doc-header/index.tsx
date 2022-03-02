import React, { FC } from 'react'
import { navigateTo } from '@tarojs/taro'
import Icon from '../../../../ui/src/components/icon'
import { View } from '@tarojs/components'
import { isWeb } from '../../utils'
import './index.less'

export interface DocsHeaderProps {
  title?: string
}

const DocsHeader: FC<DocsHeaderProps> = ({ title = '标题' }) => {

  const postIframeParentMessage = () => {
    if (isWeb) {
      window.parent.postMessage({ path: '/' }, '*')
    }
  }

  return (
    <View>
      <View className="doc-header" style={ !isWeb ? 'display:none' : '' }>
        <Icon
          className="doc-header__icon"
          value="chevron-left"
          size={ 26 }
          color="#333"
          onClick={ () => {
            navigateTo({ url: '/pages/home/index' })
            postIframeParentMessage()
          } }
        />
        <View className="doc-header__title">
          {title}
        </View>
      </View>
      <View className="doc-header__box" style={ !isWeb ? 'display:none' : '' } />
    </View>
  )
}

export default DocsHeader