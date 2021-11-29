import React, { memo, useEffect } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSwitch } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';
import { useState } from 'react';

const Switch: FC = () => {
  const [value, setValue]=useState<boolean>(true);
  return (
    <View className="container">
      <DocsHeader title='Switch'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlSwitch checked={value}
          onChange={(v)=>{
            setValue(v);
          }} 
        />
        <View className='doc-body-content-tip'>定制选中颜色</View>
        <SlSwitch checked={value} activeColor="#F03511"
          onChange={(v)=>{
            setValue(v);
          }} 
        />
        <View className='doc-body-content-tip'>定制背景颜色</View>
        <SlSwitch checked={!value} bgColor="#333"
          onChange={(v)=>{
            setValue(v);
          }} 
        />
        <View className='doc-body-content-tip'>定制宽度</View>
        <SlSwitch checked={value} bgWidth={200}
          onChange={(v)=>{
            setValue(v);
          }} 
        />
        <View className='doc-body-content-tip'>定制按钮大小</View>
        <SlSwitch checked={value} bgWidth={200} btnSize={60}
          onChange={(v)=>{
            setValue(v);
          }} 
        />
        <View className='doc-body-content-tip'>定制背景高度</View>
        <SlSwitch checked={value} bgWidth={200} btnSize={60} bgHeight={50}
          onChange={(v)=>{
            setValue(v);
          }} 
        />
        <View className='doc-body-content-tip'>定制背景圆角</View>
        <SlSwitch checked={value} bgWidth={200} btnSize={60} radius={50} bgHeight={50}
          onChange={(v)=>{
            setValue(v);
          }} 
        />
      </View>
    </View>
  );
};

export default memo(Switch);