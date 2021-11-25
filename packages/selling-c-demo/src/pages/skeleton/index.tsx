import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSkeleton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Skeleton: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Skeleton'></DocsHeader>
      <View className='doc-body toast-page'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlSkeleton />
          <View className='doc-body-content-tip'>宽 高 </View>
          <SlSkeleton width={ 500 } height={ 40 } />
          <View className='doc-body-content-tip'>类型 圆角</View>
          <SlSkeleton width={ 50 } height={ 50 } type="rounded" />
          <View className='doc-body-content-tip'>类型 直角</View>
          <SlSkeleton width={ 500 } height={ 40 } type="squared" />
        </View>
      </View>
    </View>
  );
};

export default memo(Skeleton);