import React from 'react'
import { View } from '@tarojs/components'
import './index.less'


export default class DemoPage extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <View className='home'>
        <View style={{margin: 20}}>selling-ui</View>
        <View className='comp'>
          <a href='#/pages/sl-button/index' className='comp-item'>sl-button</a>
        </View>
      </View>
    )
  }
}
