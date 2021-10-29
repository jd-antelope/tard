import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlBadge } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Badge: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Badge'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>Badge</View>
      </View>
    </View>
  );
};

export default memo(Badge);
