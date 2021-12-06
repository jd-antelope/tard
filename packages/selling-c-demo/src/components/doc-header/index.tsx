import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { navigateTo } from '@tarojs/taro'
import { SlIcon } from '@test/selling-c-ui'
import { View } from '@tarojs/components'
import { isWeb } from '../../utils'
import './index.less'

export interface DocsHeaderProps {
  title?: string
}

export default class DocsHeader extends React.Component<DocsHeaderProps> {
  public static defaultProps: DocsHeaderProps
  public static propTypes: InferProps<DocsHeaderProps>

  postIframeParentMessage () {
    if (isWeb) {
      window.parent.postMessage({ path: '/' }, '*');
    }
  }

  public render(): JSX.Element {
    const { title } = this.props

    return (
      <View className='doc-header' style={!isWeb ? 'display:none' : ''}>
        <View className='doc-header__title'
          onClick={() => {
            navigateTo({ url: `/pages/home/index` });
            this.postIframeParentMessage()
          }}
        >
          <SlIcon value='chevron-left' size={30}></SlIcon>
          {title}
        </View>
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
