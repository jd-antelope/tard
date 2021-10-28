import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlImage } from '@jd/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Image: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Image'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
      </View>
    </View>
  );
};

export default memo(Image);