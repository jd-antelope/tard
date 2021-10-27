import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const ButtonPage: FC = () => {
  return (
    <View className="container-page">
      <DocsHeader title='sl-button'></DocsHeader>
      <View className='doc-body'>
        {/* <SlButton>按钮文案</SlButton> */}
      </View>
    </View>
  );
};

export default memo(ButtonPage);

