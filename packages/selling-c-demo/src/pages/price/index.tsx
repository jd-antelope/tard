import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlPrice } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Price: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Price'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
      </View>
    </View>
  );
};

export default memo(Price);