import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlRate } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Rate: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Rate'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
      </View>
    </View>
  );
};

export default memo(Rate);