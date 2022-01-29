import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlButton, SlBadge, SlIcon } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Badge: FC = () => {
  return (
    <View className="container bg-white">
      <DocsHeader title='Badge 徽标'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基本用法</View>
        <SlBadge value={5}>
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge value={10} >
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge value='hot' >
          <SlButton>按钮</SlButton>
        </SlBadge>


        <View className='doc-body-content-tip'>小红点</View>
        <SlBadge dot >
          <SlButton>按钮</SlButton>
        </SlBadge>
        
        <View className='doc-body-content-tip'>最大值</View>
        <SlBadge value={20} maxValue={9} >
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge value={50} maxValue={20} >
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge value={200} maxValue={99} >
          <SlButton>按钮</SlButton>
        </SlBadge>

        <View className='doc-body-content-tip'>自定义颜色</View>
        <SlBadge value={8} color="blue">
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge value={76} color="blue">
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge value='NEW' color="blue">
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="width: 100%; height:20px;"></View>
        <SlBadge dot color="blue">
          <SlButton>按钮</SlButton>
        </SlBadge>

        <View className='doc-body-content-tip'>自定义内容</View>
        <SlBadge content={<SlIcon value='bell' size={12}></SlIcon>}>
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge content={<SlIcon value='check' size={12}></SlIcon>}>
          <SlButton>按钮</SlButton>
        </SlBadge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <SlBadge content={<SlIcon value='arrow-down' size={12}></SlIcon>}>
          <SlButton>按钮</SlButton>
        </SlBadge>

        <View className='doc-body-content-tip'>独立展示</View>
        <SlBadge value={5} />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <SlBadge value={100} maxValue={99} />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <SlBadge value='NEW' />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <SlBadge value={5} color="blue" />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <SlBadge content={<SlIcon value='bell' size={12}></SlIcon>} />

      </View>

    </View>
  );
};

export default memo(Badge);
