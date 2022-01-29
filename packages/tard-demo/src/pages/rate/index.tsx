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
    <View className="container full-container">
      <DocsHeader title='Rate'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlRate/>
        </View>

        <View className='doc-body-content-tip'>设置选中元素</View>
        <View className='doc-body-content__info'>
          <SlRate value={3} />
          <SlRate value={3.5} />   
        </View>

        <View className='doc-body-content-tip'>更改元素总数</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlRate value={3} max={6} />
        </View>

        <View className='doc-body-content-tip'>更改元素距离</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlRate value={3} max={5} margin={20} />
        </View>

        <View className='doc-body-content-tip'>更改选中元素的颜色值</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlRate value={3} max={5} activeColor='pink' />
        </View>

        <View className='doc-body-content-tip'>更改元素大小</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlRate value={3} max={5} size={50} />
        </View>

        <View className='doc-body-content-tip'>动态选取元素</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <SlRate value={value} max={5} onChange={(value) => chage(value)} />
        </View>
      </View>
    </View>
  );
};

export default memo(Rate);