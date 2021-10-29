import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlFooterButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const FooterButton: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='FooterButton'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
      </View>
    </View>
  );
};

export default memo(FooterButton);