import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlPrice } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Price: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Price'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlPrice price="23.00" />
          <View className='doc-body-content-tip'>价格传入数组</View>
          <SlPrice price={ ['6.00', '7.00', '23.00'] } />
          <View className='doc-body-content-tip'>大小</View>
          <SlPrice price="23.00" size={ 35 } />
          <View className='doc-body-content-tip'>颜色</View>
          <SlPrice price="23.00" color="#000" />
          <View className='doc-body-content-tip'>修改类型</View>
          <SlPrice price="23.00" type="largeMiddle" />
          <View className='doc-body-content-tip'>原价内容</View>
          <SlPrice price="23.00" originalPrice="21.00" />
          <View className='doc-body-content-tip'>修改单位</View>
          <SlPrice price="23.00" priceUnit="$" />
          <View className='doc-body-content-tip'>保留几位小数点</View>
          <SlPrice price="23.00" fixedNum={ 2 } />
          <View className='doc-body-content-tip'>自定义价格后面内容</View>
          <SlPrice price="23.00" content={ <View>商羚</View> } />
          <View className='doc-body-content-tip'>千分号形式显示</View>
          <SlPrice price="233232323.00" thousands />
        </View>
      </View>
    </View>
  );
};

export default memo(Price);