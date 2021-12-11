import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlPopup, SlButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Popup: FC = () => {
const [isVisible, setIsVisible] = useState<Boolean>(false)
const [isVisibleSelf, setIsVisibleSelf] = useState<Boolean>(false)
  return (
    <View className="container">
      <DocsHeader title='Popup'></DocsHeader>
      <View className='operate-area'>
      <View className='doc-body-content-tip'>基本用法</View>
      <SlButton onClick={() =>{setIsVisible(true)}}>显示popup</SlButton>
      <View className='doc-body-content-tip'>自定义标题、对齐方式、区域外点击关闭</View>
      <SlButton onClick={() =>{setIsVisibleSelf(true)}}>显示popup</SlButton>
      </View>
   
      <View className='doc-body'>
      <SlPopup visible={isVisible} onClose={() => setIsVisible(false)} title="默认标题"/>
      <SlPopup visible={isVisibleSelf} onClose={() => setIsVisibleSelf(false)}  closeOnclickOverlay  titleAlign="left"  title="自定义标题"/>
      </View>
    </View>
  );
};

export default memo(Popup);