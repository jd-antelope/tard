import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlTagPrice } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const TagPrice: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='TagPrice'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlTagPrice price="1.88" /> 
        <View className='doc-body-content-tip'>自定义颜色</View>
        <SlTagPrice price="120" color="green" /> 
        <View className='doc-body-content-tip'>自定义字体</View>
        <SlTagPrice price="120" size={28} /> 
        <View className='doc-body-content-tip'>自定义标题</View>
        <SlTagPrice price="120" title="推广价"/> 
      </View>
    </View>
  );
};

export default memo(TagPrice);