import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlLoading, SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Loading: FC = () => {
  const [isMask, setIsMask] = useState<boolean>(false)

  return (
    <View className="container">
      <DocsHeader title='Loading'></DocsHeader>
      <View className='doc-body toast-page'>
        <View className='doc-body-header'>loading</View>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlLoading />
          <View className='doc-body-content-tip'>颜色修改</View>
          <SlLoading color="red" />
          <View className='doc-body-content-tip'>type ios</View>
          <SlLoading type="ios" />
          <View className='doc-body-content-tip'>type loading</View>
          <SlLoading type="loading" />
          <View className='doc-body-content-tip'>type distance</View>
          <SlLoading distance={ 100 } />
          <View className='doc-body-content-tip'>type mask</View>
          <SlButton size="large" onClick={ () => setIsMask(true) }>点击</SlButton>
          {
            isMask && <SlLoading onClick={ () => {
              setIsMask(false) 
              console.log(1)
            }} distance={ 100 } isMask />
          }
        </View>
      </View>
    </View>
  );
};

export default memo(Loading);