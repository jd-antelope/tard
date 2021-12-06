import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlPopup, SlButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Popup: FC = () => {
const [isOpened, setIsOPend] = useState<Boolean>(false)
const [isOpenedSelf, setIsOPendSelf] = useState<Boolean>(false)
  return (
    <View className="container">
      <DocsHeader title='Popup'></DocsHeader>
      <View className='operate-area'>
      <SlButton onClick={() =>{setIsOPend(true)}}>基础用法</SlButton>
      <SlButton onClick={() =>{setIsOPendSelf(true)}}>自定义标题、对齐方式、区域外点击关闭</SlButton>
      </View>
   
      <View className='doc-body'>
      <SlPopup isOpened={isOpened} onClose={() => setIsOPend(false)} title="默认标题"/>
      <SlPopup isOpened={isOpenedSelf} onClose={() => setIsOPendSelf(false)}  outClose  title="自定义标题"/>
      </View>
    </View>
  );
};

export default memo(Popup);