import PropTypes, { InferProps } from 'prop-types'
import Taro, { navigateTo } from '@tarojs/taro'
import React from 'react'
import { isWeb } from './utils'
import './app.less'
class App extends React.Component {
  public static propTypes: InferProps<{}>

  componentDidShow () {
    (Taro as any).Current.app.themeParams = {
      mainColor: '#FF2929',
      secondaryColor: '#FF9B48',
      promotionColor: '#FF2929',
    }
    
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
