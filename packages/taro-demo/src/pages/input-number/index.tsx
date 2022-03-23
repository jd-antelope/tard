import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { InputNumber } from 'haw-ui-test'
import DocsHeader from '../../components/doc-header/index'

const InputNumberPage: FC = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(0)
  const [value5, setValue5] = useState(5)

  return (
    <View className="container full-container">
      <DocsHeader title='InputNumber 数字输入框' />
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <InputNumber value={value1} onChange={e => setValue1(e)} />
        </View>

        <View className='doc-body-content-tip'>步长设置</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <InputNumber value={value2} step={5} onChange={e => setValue2(e)} />
          <View style="display:inline-block; width: 40px; height:20px;"></View>
          <InputNumber value={value3} step={0.1} onChange={e => setValue3(e)} />
        </View>

        <View className='doc-body-content-tip'>限制输入范围</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <InputNumber value={value4} min={10} max={20} onChange={e => setValue4(e)} />
        </View>

        <View className='doc-body-content-tip'>禁用操作</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <InputNumber value={value5} disabled onChange={e => setValue5(e)} />
        </View>

        <View className='doc-body-content-tip'>只读禁用输入框</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <InputNumber value={value5} readonly onChange={e => setValue5(e)} />
        </View>

        <View className='doc-body-content-tip'>自定义按钮大小</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <InputNumber value={value1} size="large" onChange={e => setValue1(e)} />
          <View style="display:inline-block; width: 40px; height:20px;"></View>
          <InputNumber value={value1} width={150} onChange={e => setValue1(e)} />
        </View>
      </View>
    </View>
  );
};

export default memo(InputNumberPage);