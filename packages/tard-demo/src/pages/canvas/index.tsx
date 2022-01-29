import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCanvas, SlIcon } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Canvas: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [open1, setOpen1] = useState<boolean>(false)
  const [open2, setOpen2] = useState<boolean>(false)

  return (
    <View className="container">
      <DocsHeader title='Canvas'></DocsHeader>
      <View className='doc-body toast-page'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <View className='comp-items' onClick={() => {
            setOpen(true)
            setOpen2(false);
          }}>
            <View className="comp-item-text">基本案例</View>
            <SlIcon value="chevron-right" color="#333" size={16} />
          </View>
          <View className='doc-body-content-tip'>自定义宽高</View>
          <View className='comp-items' onClick={() => {
            setOpen1(true);
            setOpen2(false);
          }}>
            <View className="comp-item-text">自定义宽高</View>
            <SlIcon value="chevron-right" color="#333" size={16} />
          </View>
          <View className='doc-body-content-tip'>遮罩不展示</View>
          <View className='comp-items' onClick={() => {
            setOpen2(!open2)
          }}>
            <View className="comp-item-text">遮罩不展示</View>
            <SlIcon value="chevron-right" color="#333" size={16} />
          </View>
          
        </View>
        <SlCanvas
          id="canvas"
          visible={ open }
          contentCallback={(ctx, dpr) => {
            ctx.beginPath();
            ctx.setFontSize(dpr(30));
            ctx.setFillStyle('#333');
            ctx.fillText('文本~', dpr(56), dpr(100));
            ctx.closePath();
          } }
          onClose={ () => setOpen(false) }
        />
        <SlCanvas
          id="canvascustom"
          width={ 500 }
          height={ 400 }
          visible={ open1 }
          contentCallback={(ctx, dpr) => {
            ctx.beginPath();
            ctx.setFontSize(dpr(30));
            ctx.setFillStyle('#333');
            ctx.fillText('文本~', dpr(56), dpr(100));
            ctx.closePath();
          } }
          onClose={ () => setOpen1(false) }
        />
        <SlCanvas
          id="canvasoverlay"
          visible={ open2 }
          overlay={ false }
          contentCallback={(ctx, dpr) => {
            ctx.beginPath();
            ctx.setFontSize(dpr(30));
            ctx.setFillStyle('#333');
            ctx.fillText('文本~', dpr(56), dpr(100));
            ctx.closePath();
          } }
          onClose={ () => setOpen2(false) }
        />

      </View>
    </View>
  );
};

export default memo(Canvas);