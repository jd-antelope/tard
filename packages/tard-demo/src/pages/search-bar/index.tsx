import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSearchBar, SlToast } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';
import { useState } from 'react';

const SearchBar: FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [value, setValue] = useState()

  return (
    <View className="container full-container">
      <DocsHeader title='SearchBar'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基础用法</View>
        <SlSearchBar value={value} onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>自定义搜索框形状</View>
        <SlSearchBar value={value} shape="square" onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>输入框居中对齐</View>
        <SlSearchBar value={value} inputAlign="center" onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>取消按钮</View>
        <SlSearchBar value={value} showCancel onChange={(e) => setValue(e)} onCancel={() => setToastVisible(true)} />

        <View className='doc-body-content-tip'>自定义placeholder</View>
        <SlSearchBar value={value}  placeholder="搜索商品热门关键词" onChange={(e) => setValue(e)} />
       
        <View className='doc-body-content-tip'>禁用搜索框</View>
        <SlSearchBar value={value}  disabled onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>自定义背景色</View>
        <SlSearchBar value={value}  background="#FF2929" onChange={(e) => setValue(e)} />
        
        <View className='doc-body-content-tip'>自定义样式</View>
      </View>

      <SlToast text="取消" visible={toastVisible} onClose={() => setToastVisible(false)} />
    </View>
  );
};

export default memo(SearchBar);