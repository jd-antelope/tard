import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlIcon } from '@jd/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Icon: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Icon'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
      </View>
    </View>
  );
};

export default memo(Icon);