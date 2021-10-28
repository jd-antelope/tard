import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlDropdownMenu, SlDropdownMenuItem } from '@jd/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const DropdownMenu: FC = () => {
  const option1 = [
    { text: '全部类型', value: 0 },
    { text: '京东商品', value: 1 },
    { text: '自建商品', value: 2 },
  ]
  return (
    <View className="container">
      <DocsHeader title='DropdownMenu'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
        <SlDropdownMenu onClick={ () => console.log(111) } >
          <SlDropdownMenuItem title="订单类型" options={option1} />
          <SlDropdownMenuItem title="商品类型" options={option1} />
        </SlDropdownMenu>
      </View>
    </View>
  );
};

export default memo(DropdownMenu);