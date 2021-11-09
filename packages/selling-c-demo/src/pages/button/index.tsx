import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';


const Button: FC = () => {


  return (
    <View className="container">
      <DocsHeader title='Button'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlButton>按钮按钮按钮按钮</SlButton>

        <View className='doc-body-content-tip'>通栏按钮</View>
        <SlButton full>通栏按钮</SlButton>

        <View className='doc-body-content-tip'>边框颜色</View>
        <SlButton full borderColor='pink'>自定义边框颜色</SlButton>

        <View className='doc-body-content-tip'>背景颜色</View>
        <SlButton full fillColor='pink'>自定义背景颜色</SlButton>

        <View className='doc-body-content-tip'>尺寸大小</View>
        <View><SlButton size='small'>small button</SlButton></View>
        <View><SlButton size='middle'>middle button</SlButton></View>
        <View><SlButton size='large'>large button</SlButton></View>
        
        <View className='doc-body-content-tip'>自定义圆角</View>
        <SlButton>默认</SlButton>
        <SlButton radius={24}>24px</SlButton>
        <SlButton radius={36}>36px</SlButton>
      </View>

    </View>
  );
};

export default memo(Button);