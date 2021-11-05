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
        <View className='doc-body-header'>price</View>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlPrice price="23.00" />
          <View className='doc-body-content-tip'>size</View>
          <SlPrice price="23.00" color="#000" size={ 35 } />
          <View className='doc-body-content-tip'>color</View>
          <SlPrice price="23.00" color="#000" />
          <View className='doc-body-content-tip'>原价</View>
          <SlPrice price="23.00" originalPrice="21.00" />
          <View className='doc-body-content-tip'>佣金</View>
          <SlPrice price="23.00" commissionPrice />
          <View className='doc-body-content-tip'>fixedNum</View>
          <SlPrice price="23.00" fixedNum={ 2 } />
          <View className='doc-body-content-tip'>trigger</View>
          <SlPrice price="23.00" fixedNum={ 2 } trigger={'323'} />
        </View>
      </View>
    </View>
  );
};

export default memo(Price);