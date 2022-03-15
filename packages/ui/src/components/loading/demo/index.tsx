import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Loading, Icon } from 'haw-ui-test'
import DocsHeader from '../../components/doc-header/index'

const LoadingPage: FC = () => {
  const [overlay, setOverlay] = useState<boolean>(false)

  return (
    <View className="container full-container">
      <DocsHeader title='Loading 加载' />
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本案例</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Loading />
        </View>

        <View className='doc-body-content-tip'>颜色修改</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Loading color="red" />
        </View>
        <View className='doc-body-content-tip'>类型 ios</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Loading type="ios" />
        </View>
        <View className='doc-body-content-tip'>类型 loading</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Loading type="loading" />
        </View>
        <View className='doc-body-content-tip'>大小</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Loading size={100} />
        </View>
        <View className='doc-body-content-tip'>全局定位</View>
        <View className='comp-items' onClick={() => setOverlay(true)}>
          <View className="comp-item-text">点击</View>
          <Icon value="chevron-right" color="#333" size={16} />
        </View>
        {
          overlay &&
          <Loading
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

export default memo(LoadingPage);