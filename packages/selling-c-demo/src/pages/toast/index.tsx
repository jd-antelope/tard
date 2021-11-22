import React, { memo, useState, useCallback } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlToast, SlButton } from '@test/selling-c-ui'
import { SlToastProps } from '@test/selling-c-ui/types/toast'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Toast: FC = () => {
  const [toast, setToast] = useState<SlToastProps>({ isOpened: false });

  const showHsToast = useCallback((toastParams) => {
    setToast({
      isOpened: true,
      ...toastParams,
      onClose: () => setToast({ isOpened: false, text: toastParams.text, status: toastParams.status })
    });
  }, []);

  return (
    <View className="container">
      <DocsHeader title='Toast'></DocsHeader>
      <View className='doc-body toast-page'>
        <View className='doc-body-header'>toast 轻提示</View>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlButton 
            size="large"
            onClick={ () => showHsToast({ text: '文本', duration: 2000 }) }
          >文本 Toast</SlButton>
          <SlButton 
            size="large"
            onClick={ () => showHsToast({ text: '成功', icon: 'analytics', duration: 2000 }) }
          >文本 Icom</SlButton>
          <View className='doc-body-content-tip'>自定义图片</View>
          <SlButton 
            size="large"
            onClick={ () => showHsToast({ 
              text: '自定义图片', 
              image: 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png' 
            }) }
          >自定义图片</SlButton>
          <View className='doc-body-content-tip'>添加遮罩层</View>
          <SlButton 
            size="large"
            onClick={ () => showHsToast({ text: '文本', hasMask: true }) }
          >添加遮罩层</SlButton>
          <View className='doc-body-content-tip'>Error Toast</View>
          <SlButton 
            size="large"
            onClick={ () => showHsToast({ 
              text: '文本', 
              hasMask: true,
              status: 'error' 
            }) }
          >Error</SlButton>
          <View className='doc-body-content-tip'>Success Toast</View>
          <SlButton 
            size="large"
            onClick={ () => showHsToast({ 
              text: '文本', 
              hasMask: true,
              status: 'success' 
            }) }
          >Success</SlButton>
          <View className='doc-body-content-tip'>Loading Toast</View>
          <SlButton 
            size="large"
            onClick={ () => showHsToast({ 
              text: '文本', 
              hasMask: true,
              status: 'loading' 
            }) }
          >Loading</SlButton>
        </View>
      </View>
      <SlToast { ...toast } />
    </View>
  );
};

export default memo(Toast);