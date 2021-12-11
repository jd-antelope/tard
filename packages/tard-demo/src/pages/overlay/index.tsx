import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlButton, SlOverlay } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Overlay: FC = () => {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  return (
    <View className="container">
      <DocsHeader title='Overlay'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基本用法</View>
        <SlButton onClick={() => setShow(true)}>显示遮罩层</SlButton>
        <SlOverlay show={show} onClick={() => setShow(false)} />

        <View className='doc-body-content-tip'>嵌入内容</View>
        <SlButton onClick={() => setShow1(true)}>嵌入内容</SlButton>
        <SlOverlay show={show1} onClick={() => setShow1(false)}>
          <View style="display: flex; align-items: center; justify-content: center; height: 100%;" >
            <View style='width:200px; height:200px; background: #fff'></View>
          </View>
        </SlOverlay>

      </View>
    </View>
  );
};

export default memo(Overlay);