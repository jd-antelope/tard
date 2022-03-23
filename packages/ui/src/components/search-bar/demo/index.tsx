import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SearchBar, Toast } from 'haw-ui-test'
import DocsHeader from '../../components/doc-header/index'

const SearchBarPage: FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [value, setValue] = useState()

  return (
    <View className="container full-container">
      <DocsHeader title='SearchBar'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基础用法</View>
        <SearchBar value={value} onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>自定义搜索框形状</View>
        <SearchBar value={value} shape="square" onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>输入框居中对齐</View>
        <SearchBar value={value} inputAlign="center" onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>取消按钮</View>
        <SearchBar value={value} showCancel onChange={(e) => setValue(e)} onCancel={() => setToastVisible(true)} />

        <View className='doc-body-content-tip'>自定义placeholder</View>
        <SearchBar value={value}  placeholder="搜索商品热门关键词" onChange={(e) => setValue(e)} />
       
        <View className='doc-body-content-tip'>禁用搜索框</View>
        <SearchBar value={value}  disabled onChange={(e) => setValue(e)} />

        <View className='doc-body-content-tip'>自定义背景色</View>
        <SearchBar value={value}  background="#FF2929" onChange={(e) => setValue(e)} />
        
        <View className='doc-body-content-tip'>自定义样式</View>
      </View>

      <Toast text="取消" visible={toastVisible} onClose={() => setToastVisible(false)} />
    </View>
  );
};

export default memo(SearchBarPage);