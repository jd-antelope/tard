import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCanvas } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Canvas: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Canvas'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
      </View>
    </View>
  );
};

export default memo(Canvas);