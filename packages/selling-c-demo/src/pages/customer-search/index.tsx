import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCustomerSearch } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const CustomerSearch: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='CustomerSearch'></DocsHeader>
      <View className='doc-body'>
        <SlCustomerSearch onConfirm={(data)=>{ console.log(data,"父组件内容 ")}} />
      </View>
    </View>
  );
};

export default memo(CustomerSearch);