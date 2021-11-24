import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlLoading, SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Loading: FC = () => {
  const [overlay, setOverlay] = useState<boolean>(false)

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
          <View className='doc-body-content-tip'>类型 ios</View>
          <SlLoading type="ios" />
          <View className='doc-body-content-tip'>类型 loading</View>
          <SlLoading type="loading" />
          <View className='doc-body-content-tip'>大小</View>
          <SlLoading size={ 100 } />
          <View className='doc-body-content-tip'>展示遮罩</View>
          <SlButton size="large" onClick={ () => setOverlay(true) }>点击</SlButton>
          {
            overlay && 
            <SlLoading 
              onClick={ () => {
                setOverlay(false) 
              }} 
              size={ 100 } 
              overlay 
            />
          }
        </View>
      </View>
    </View>
  );
};

export default memo(Loading);