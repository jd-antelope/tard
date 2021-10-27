import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlUpload } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Upload: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Upload'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
      </View>
    </View>
  );
};

export default memo(Upload);