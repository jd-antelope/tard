import React, { memo } from 'react'
import { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Button } from 'tard'
import DocsHeader from '../../components/doc-header/index'

import './index.less'

const ButtonPage: FC = () => {
  const style = {
    color: '',
    '--color-paramry': 'yellow'
  }

  return (
    <View className="container" style={style}>
      <DocsHeader title="Button 按钮fsdf" />
      <View className="doc-body">
        <View className="doc-body-content-tip">按钮类型</View>
        <View className="button-box">
          <Button>主要按钮</Button>
          <Button className="el" type="primary">主要按钮</Button>
          <Button className="el" type="info">信息按钮</Button>
          <Button className="el" type="default">默认按钮</Button>
          <Button className="el" type="danger">危险按钮</Button>
          <Button className="el" type="warning">警告按钮</Button>
          <Button className="el" type="success">成功按钮</Button>
        </View>

        <View className="doc-body-content-tip">边框按钮</View>
        <View className="button-box">
          <Button className="el" border type="primary">主要按钮</Button>
          <Button className="el" border type="info">信息按钮</Button>
          <Button className="el" border type="warning">警告按钮</Button>
          <Button className="el" border type="danger">危险按钮</Button>

        </View>


        <View className="doc-body-content-tip">按钮形状</View>
        <View className="button-box">
          <Button className="el" round="rect" type="primary">主要按钮</Button>
          <Button className="el" type="info">信息按钮</Button>
          <Button className="el" round="circle" type="warning">警告按钮</Button>
        </View>

        <View className="doc-body-content-tip">自定义背景颜色</View>
        <View className="button-box">
          <Button className="el" fillColor="#6F16E8">单色按钮</Button>
          <Button className="el" fillColor="linear-gradient(90deg, rgba(133,44,255,1) 0%,rgba(97,16,206,1) 100%)">渐变按钮</Button>
          <Button className="el" border fillColor="#6F16E8">单色按钮</Button>

        </View>

        <View className="doc-body-content-tip">自定义文字颜色</View>
        <View className="button-box">
          <Button className="el" color="red">红色文字</Button>
          <Button className="el" color="green">绿色文字</Button>
          <Button className="el" color="blue" >蓝色文字</Button>
        </View>

        <View className="doc-body-content-tip">自定义圆角</View>
        <View className="button-box">
          <Button className="el" type="primary">默认</Button>
          <Button className="el" radius={ 24 } type="info">24px</Button>
          <Button className="el" radius={ 36 } type="warning">36px</Button>
        </View>

        <View className="doc-body-content-tip">禁用状态</View>
        <View className="button-box">
          <Button
            className="el" disabled border
            type="primary"
          >主要按钮</Button>
          <Button
            className="el" disabled border
            type="info"
          >信息按钮</Button>
          <Button
            className="el" disabled border
            type="warning"
          >警告按钮</Button>
          <Button className="el" disabled type="danger">危险按钮</Button>
          <Button className="el" disabled type="default">默认按钮</Button>
        </View>

        <View className="doc-body-content-tip">按钮尺寸</View>
        <View className="button-box">
          <Button className="el" full type="primary">通栏按钮</Button>
          <Button className="el" size="large" type="primary">大型按钮</Button>
          <Button className="el" size="normal" type="primary">普通按钮</Button>
          <Button className="el" size="small" type="primary">小型按钮</Button>
          <Button className="el" size="mini" type="primary">迷你按钮</Button>
        </View>
      </View>

    </View>
  )
}

export default memo(ButtonPage)