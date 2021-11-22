import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCustomHeader } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const CustomHeader: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='CustomHeader'></DocsHeader>
      <View className='doc-body'>
        <SlCustomHeader>button</SlCustomHeader>
      </View>
    </View>
  );
};

export default memo(CustomHeader);