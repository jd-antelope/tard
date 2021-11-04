import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSearch } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Search: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Search'></DocsHeader>
      <View className='doc-body' style={{width:"220px",height:"66px"}}>
        <SlSearch  onConfirm={(data)=>{ console.log(data,"父组件内容 ")}} /> 
      </View>
    </View>
  );
};

export default memo(Search);