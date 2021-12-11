import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlInputNumber } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const InputNumber: FC = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(0)
  const [value5, setValue5] = useState(5)

  return (
    <View className="container">
      <DocsHeader title='InputNumber'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基本用法</View>
        <SlInputNumber value={value1} onChange={e => setValue1(e)} />

        <View className='doc-body-content-tip'>步长设置</View>
        <SlInputNumber value={value2} step={5} onChange={e => setValue2(e)} />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <SlInputNumber value={value3} step={0.1} onChange={e => setValue3(e)} />

        <View className='doc-body-content-tip'>限制输入范围</View>
        <SlInputNumber value={value4} min={10} max={20} onChange={e => setValue4(e)} />

        <View className='doc-body-content-tip'>禁用操作</View>
        <SlInputNumber value={value5} disabled onChange={e => setValue5(e)} />

        <View className='doc-body-content-tip'>只读禁用输入框</View>
        <SlInputNumber value={value5} readonly onChange={e => setValue5(e)} />

        <View className='doc-body-content-tip'>自定义按钮大小</View>
        <SlInputNumber value={value1} size="large" onChange={e => setValue1(e)} />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <SlInputNumber value={value1} width={150} onChange={e => setValue1(e)} />
      </View>
    </View>
  );
};

export default memo(InputNumber);