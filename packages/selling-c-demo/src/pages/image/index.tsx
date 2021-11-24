import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlImage } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Image: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Image'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlImage className="base-image" src="https://storage.360buyimg.com/hawley-common/selling-logo.png" />

        <View className='doc-body-content-tip'>错误处理</View>
        <SlImage className="base-image" src="" />

        <View className='doc-body-content-tip'>取消加载动画</View>
        <SlImage isTransition={ false } className="base-image" src="https://storage.360buyimg.com/hawley-common/selling-logo.png" />
      </View>
    </View>
  );
};

export default memo(Image);