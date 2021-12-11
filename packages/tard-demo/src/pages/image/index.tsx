import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlImage } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Image: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Image'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlImage className="base-image" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />

        <View className='doc-body-content-tip'>加载失败提示</View>
        <SlImage className="base-image" src="" />

        <View className='doc-body-content-tip'>自定义加载失败提示</View>
        <SlImage 
          className="base-image" 
          src="" 
          errorContent={ <View>加载失败</View> } 
        />
        <View className='doc-body-content-tip'>增加预览效果</View>
        <SlImage preview className="base-image" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
      </View>
    </View>
  );
};

export default memo(Image);