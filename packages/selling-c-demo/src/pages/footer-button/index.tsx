import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlFooterButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const FooterButton: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='FooterButton'></DocsHeader>
      <View className='doc-body'>
        <SlFooterButton
          className='pos-1'
          name="按钮1" />
        <SlFooterButton
          className='pos-2'
          name="按钮2"
          secondName='按钮1'
          doubleBtn />
        <SlFooterButton
          className='pos-3'
          name="按钮2"
          secondName='按钮1'
          doubleBtn
          radius={20}
          padding={'10 15 20 25'} />
        <SlFooterButton
          className='pos-4'
          name="按钮2"
          secondName='按钮1'
          doubleBtn
          radius={20}
          padding='10'
          margin={20} />
        <SlFooterButton className='pos-5'
          name="按钮2"
          background='#cf6d6d'
          secBackground='#c1b0b0'
          secondName='按钮1'
          doubleBtn
          radius={20}
          padding='10'
          margin={20} />
      </View>
    </View>
  );
};

export default memo(FooterButton);