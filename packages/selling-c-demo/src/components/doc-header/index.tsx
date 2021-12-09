import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { navigateTo } from '@tarojs/taro'
import { SlIcon } from 'tard'
import { View } from '@tarojs/components'
import { isWeb } from '../../utils'
import './index.less'

export interface DocsHeaderProps {
  title?: string
}

export default class DocsHeader extends React.Component<DocsHeaderProps> {
  public static defaultProps: DocsHeaderProps
  public static propTypes: InferProps<DocsHeaderProps>

  postIframeParentMessage() {
    if (isWeb) {
      window.parent.postMessage({ path: '/' }, '*');
    }
  }

  public render(): JSX.Element {
    const { title } = this.props

    return (
      <View>
        <View className='doc-header' style={!isWeb ? 'display:none' : ''}>
          <SlIcon
            className='doc-header__icon'
            value='chevron-left'
            size={26}
            color="#333"
            onClick={() => {
              navigateTo({ url: `/pages/home/index` });
              this.postIframeParentMessage()
            }}
          ></SlIcon>
          <View className='doc-header__title'>
            {title}
          </View>
        </View>
        <View className="doc-header__box" style={!isWeb ? 'display:none' : ''}></View>
      </View>
    )
  }
}

DocsHeader.defaultProps = {
  title: '标题'
}

DocsHeader.propTypes = {
  title: PropTypes.string
}
