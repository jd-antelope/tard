import { navigateTo } from '@tarojs/taro'
import React from 'react'
import Taro from '@tarojs/taro'
import { ConfigProvider } from 'tard'
import { isWeb } from './utils'
import './app.less'

class App extends React.Component {

  componentDidShow() {
    // ConfigProvider.config({
    //   // cssPrefix: 'tard',
    //   theme: {
    //     'color-primary': 'purple',//purple
    //     'font-size-base': '16px',
    //     'button-radius': '20px'
    //   }
    // })

    if (isWeb) {
      window.addEventListener("message", this.iframeListener, false);
    }
  }

  iframeListener(e: any) {
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

export default App
