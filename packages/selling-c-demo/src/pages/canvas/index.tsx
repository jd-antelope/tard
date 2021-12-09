import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCanvas, SlButton } from 'tard'
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
          <SlButton 
            size="large"
            onClick={ 
              () => {
                setOpen(true)
                setOpen2(false);
              }
            }
          >基本案例</SlButton>
          <View className='doc-body-content-tip'>自定义宽高</View>
          <SlButton 
            size="large"
            onClick={ () => {
              setOpen1(true);
              setOpen2(false);
            }}
          >
            自定义宽高
          </SlButton>
          <View className='doc-body-content-tip'>遮罩不展示</View>
          <SlButton 
            size="large"
            onClick={ () => setOpen2(!open2) }
          >
            遮罩不展示
          </SlButton>
          
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