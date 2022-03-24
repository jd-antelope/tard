import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Switch } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const SwitchPage: FC = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <View className="container full-container">
      <DocsHeader title='Switch'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Switch checked={value}
            onChange={(v) => {
              setValue(v);
            }}
          />
        </View>
        <View className='doc-body-content-tip'>定制选中颜色</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Switch checked={value} activeColor="#F03511"
            onChange={(v) => {
              setValue(v);
            }}
          />
        </View>
        <View className='doc-body-content-tip'>定制背景颜色</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Switch checked={!value} bgColor="#333"
            onChange={(v) => {
              setValue(v);
            }}
          />
        </View>
        <View className='doc-body-content-tip'>定制宽度</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Switch checked={value} bgWidth={200}
            onChange={(v) => {
              setValue(v);
            }}
          />
        </View>
        <View className='doc-body-content-tip'>定制按钮大小</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Switch checked={value} bgWidth={200} btnSize={60}
            onChange={(v) => {
              setValue(v);
            }}
          />
        </View>
        <View className='doc-body-content-tip'>定制背景高度</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Switch checked={value} bgWidth={200} btnSize={60} bgHeight={50}
            onChange={(v) => {
              setValue(v);
            }}
          />
        </View>
        <View className='doc-body-content-tip'>定制背景圆角</View>
        <View className='doc-body-content__info doc-body-content__row'>
          <Switch checked={value} bgWidth={200} btnSize={60} radius={50} bgHeight={50}
            onChange={(v) => {
              setValue(v);
            }}
          />
        </View>

      </View>
    </View>
  );
};

export default memo(SwitchPage);