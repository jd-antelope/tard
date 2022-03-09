import PropTypes, { InferProps } from 'prop-types'
import { navigateTo } from '@tarojs/taro'
import React from 'react'
import { ConfigProvider } from 'haw-ui-test'
import { isWeb } from './utils'
import './app.less'

class App extends React.Component {
  public static propTypes: InferProps<{}>

  componentDidShow () {
    ConfigProvider.config({
      theme: {
        'color-primary': '#000',
      }
    })
    
    if (isWeb) {
      window.addEventListener("message", this.iframeListener, false);
    }
  }

  iframeListener (e: any) {
    const activeMenu = e.data.path
    if (activeMenu) {
      navigateTo({
        url: `/pages${activeMenu}/index`
      });
    }
  }

  public render(): React.ReactNode {
    return this.props.children
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
