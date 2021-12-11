import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlRate } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Rate: FC = () => {

  const [value, setValue] = useState(3)
  const chage = (v) => {
    setValue(v)
  }
  return (
    <View className="container">
      <DocsHeader title='Rate'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlRate/>

        <View className='doc-body-content-tip'>设置选中元素</View>
        <SlRate value={3} />
        <SlRate value={3.5} />

        <View className='doc-body-content-tip'>更改元素总数</View>
        <SlRate value={3} max={6} />

        <View className='doc-body-content-tip'>更改元素距离</View>
        <SlRate value={3} max={5} margin={20} />

        <View className='doc-body-content-tip'>更改选中元素的颜色值</View>
        <SlRate value={3} max={5} activeColor='pink' />

        <View className='doc-body-content-tip'>更改元素大小</View>
        <SlRate value={3} max={5} size={50} />

        <View className='doc-body-content-tip'>动态选取元素</View>
        <SlRate value={value} max={5} onChange={(value) => chage(value)} />
      </View>
    </View>
  );
};

export default memo(Rate);