import PropTypes, { InferProps } from 'prop-types'
import Taro from '@tarojs/taro'
import React from 'react'
import './app.less'
import "@test/selling-c-ui/dist/style/index.less";
class App extends React.Component {
  public static propTypes: InferProps<{}>

  componentDidShow () {
    (Taro as any).Current.app.themeParams = {
      mainColor: '#FF2929',
      secondaryColor: '#FF9B48',
      promotionColor: '#FF2929',
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
