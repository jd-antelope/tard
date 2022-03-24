import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Popup, Icon } from 'tard'
import DocsHeader from '../../components/doc-header/index'
import './index.less';

const PopupPage: FC = () => {
const [isVisible, setIsVisible] = useState<Boolean>(false)
const [isVisibleSelf, setIsVisibleSelf] = useState<Boolean>(false)
  return (
    <View className="container">
      <DocsHeader title='Popup 弹出框'></DocsHeader>
      <View className='operate-area'>
      <View className='doc-body-content-tip'>基本用法</View>
      <View className='comp-items' onClick={() => setIsVisible(true)}>
        <View className="comp-item-text">显示popup</View>
        <Icon value="chevron-right" color="#333" size={16} />
      </View>
      <View className='doc-body-content-tip'>自定义标题、对齐方式、区域外点击关闭</View>
      <View className='comp-items' onClick={() => setIsVisibleSelf(true)}>
        <View className="comp-item-text">显示popup</View>
        <Icon value="chevron-right" color="#333" size={16} />
      </View>
      </View>
   
      <View className='doc-body'>
      <Popup visible={isVisible} onClose={() => setIsVisible(false)} title="默认标题"/>
      <Popup visible={isVisibleSelf} onClose={() => setIsVisibleSelf(false)}  closeOnclickOverlay  titleAlign="left"  title="自定义标题"/>
      </View>
    </View>
  );
};

export default memo(PopupPage);