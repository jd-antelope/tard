import React, { memo, useState, useCallback } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCanvas, SlButton } from '@test/selling-c-ui'
import { SlCanvasProps } from '@test/selling-c-ui/types/canvas'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Canvas: FC = () => {
  const [canvasProps, setCanvasProps] = useState<SlCanvasProps>({ 
    visible: false,
    onClose: () => setCanvasProps({ visible: false })
  });

  const showSlCanvas = useCallback((toastParams) => {
    setCanvasProps({
      visible: true,
      ...toastParams,
      onClose: () => setCanvasProps({ visible: false })
    });
  }, []);

  return (
    <View className="container">
      <DocsHeader title='Canvas'></DocsHeader>
      <View className='doc-body toast-page'>
        <View className='doc-body-header'>Canvas</View>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlButton 
            size="large"
            onClick={ 
              () => showSlCanvas({ contentCallback: (ctx, dpr) => {
                ctx.setFontSize(8 * dpr);
                ctx.setFillStyle('#333');
                ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
              } }) 
            }
          >基本案例</SlButton>
          <View className='doc-body-content-tip'>自定义宽高</View>
          <SlButton 
            size="large"
            onClick={ 
              () => showSlCanvas({ 
                width: 500,
                height: 400,
                contentCallback: (ctx, dpr) => {
                  ctx.setFontSize(8 * dpr);
                  ctx.setFillStyle('#333');
                  ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
                } })
            }
          >
            自定义宽高
          </SlButton>
          <View className='doc-body-content-tip'>遮罩不展示</View>
          <SlCanvas 
            visible
            overlay={ false }
            contentCallback={(ctx, dpr) => {
              ctx.setFontSize(8 * dpr);
              ctx.setFillStyle('#333');
              ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
            } }
          />
        </View>
        <SlCanvas { ...canvasProps } />
      </View>
    </View>
  );
};

export default memo(Canvas);