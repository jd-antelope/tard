import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Skeleton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const SkeletonPage: FC = () => {
  return (
    <View className="container full-container">
      <DocsHeader title='Skeleton 骨架屏'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本用法</View>
          <View className='doc-body-content__info'>
            <Skeleton />
          </View>
          <View className='doc-body-content-tip'>自定义宽高</View>
          <View className='doc-body-content__info'>
            <Skeleton width={ 500 } height={ 40 } />
          </View>
          <View className='doc-body-content-tip'>圆角</View>
          <View className='doc-body-content__info'>
            <Skeleton width={ 50 } height={ 50 } type="rounded" />
          </View>
          
          <View className='doc-body-content-tip'>直角</View>
          <View className='doc-body-content__info'>
            <Skeleton width={ 500 } height={ 40 } type="squared" />
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default memo(SkeletonPage);