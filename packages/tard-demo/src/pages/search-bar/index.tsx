import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSearchBar } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const SearchBar: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='SearchBar'></DocsHeader>
      <View className='doc-body'>
        <SlSearchBar onClick={()=>{ console.log("跳转")}} isSkip={true} onConfirm={(data)=>{ console.log(data,"父组件内容 ")}} /> 
      </View>
    </View>
  );
};

export default memo(SearchBar);