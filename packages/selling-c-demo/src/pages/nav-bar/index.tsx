import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlNavBar } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const NavBar: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='NavBar'></DocsHeader>
      <View className='doc-body'>
        <SlNavBar>button</SlNavBar>
      </View>
    </View>
  );
};

export default memo(NavBar);