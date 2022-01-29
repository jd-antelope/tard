import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlLoading, SlIcon } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Loading: FC = () => {
  const [overlay, setOverlay] = useState<boolean>(false)

  return (
    <View className="container full-container">
      <DocsHeader title='Loading 加载' />
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本案例</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlLoading />
        </View>

        <View className='doc-body-content-tip'>颜色修改</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlLoading color="red" />
        </View>
        <View className='doc-body-content-tip'>类型 ios</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlLoading type="ios" />
        </View>
        <View className='doc-body-content-tip'>类型 loading</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlLoading type="loading" />
        </View>
        <View className='doc-body-content-tip'>大小</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlLoading size={100} />
        </View>
        <View className='doc-body-content-tip'>全局定位</View>
        <View className='comp-items' onClick={() => setOverlay(true)}>
          <View className="comp-item-text">点击</View>
          <SlIcon value="chevron-right" color="#333" size={16} />
        </View>
        {
          overlay &&
          <SlLoading
            onClick={() => {
              setOverlay(false)
            }}
            size={100}
            overlay
          />
        }
      </View>
    </View>
  );
};

export default memo(Loading);