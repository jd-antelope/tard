import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlTab } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';
const orderStatus = [{
  key: 'total',
  title: '全部'
},{
  key: '1',
  title: '待付款'
},{
  key: '2',
  title: '已付款'
},{
  key: '4',
  title: '已完成'
},{
  key: '5',
  title: '无效'
},{
  key: '6',
  title: '已结算'
}]

const Tab: FC = () => {
  
  const [current1, setCurrent1] = useState<number>(0)
  const [current2, setCurrent2] = useState<number>(1)
  const [current3, setCurrent3] = useState<number>(2)

  return (
    <View className="container bg-white">
      <DocsHeader title='Tab'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlTab
          tabList={ orderStatus.slice(3) } current={ current1 }
          height="64" onClick={ (active) => {
            setCurrent1(active)
          } }
        />
        <View className='doc-body-content-tip'>支持滚动</View>
        <SlTab
          tabList={ orderStatus } current={ current2 }
          height="64" scroll={ true }
          onClick={ (active) => {
            setCurrent2(active)
          } }
        />
        <View className='doc-body-content-tip'>文字颜色变换</View>
        <SlTab
          tabList={ orderStatus } current={ current3 }
          height="100" scroll={ true } activeColor="#36D57D" color="#000000"
          onClick={ (active) => {
            setCurrent3(active)
          } }
        />
      </View>
      
    </View>
  );
};

export default memo(Tab);