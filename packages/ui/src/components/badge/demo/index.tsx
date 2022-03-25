import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Button, Badge, Icon } from 'tard'
import DocsHeader from '../../components/doc-header/index'

const BadgePage: FC = () => {
  return (
    <View className="container bg-white">
      <DocsHeader title='Badge 徽标'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基本用法</View>
        <Badge value={5}>
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge value={10} >
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge value='hot' >
          <Button>按钮</Button>
        </Badge>


        <View className='doc-body-content-tip'>小红点</View>
        <Badge dot >
          <Button>按钮</Button>
        </Badge>

        <View className='doc-body-content-tip'>最大值</View>
        <Badge value={20} maxValue={9} >
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge value={50} maxValue={20} >
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge value={200} maxValue={99} >
          <Button>按钮</Button>
        </Badge>

        <View className='doc-body-content-tip'>自定义颜色</View>
        <Badge value={8} color="blue">
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge value={76} color="blue">
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge value='NEW' color="blue">
          <Button>按钮</Button>
        </Badge>
        <View style="width: 100%; height:20px;"></View>
        <Badge dot color="blue">
          <Button>按钮</Button>
        </Badge>

        <View className='doc-body-content-tip'>自定义内容</View>
        <Badge content={<Icon value='video' size={12}></Icon>}>
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge content={<Icon value='chevron-up' size={12}></Icon>}>
          <Button>按钮</Button>
        </Badge>
        <View style="display:inline-block; width: 20px; height:20px;"></View>
        <Badge content={<Icon value='chevron-down' size={12}></Icon>}>
          <Button>按钮</Button>
        </Badge>

        <View className='doc-body-content-tip'>独立展示</View>
        <Badge value={5} />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <Badge value={100} maxValue={99} />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <Badge value='NEW' />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <Badge value={5} color="blue" />
        <View style="display:inline-block; width: 40px; height:20px;"></View>
        <Badge content={<Icon value='video' size={12}></Icon>} />

      </View>

    </View>
  );
};

export default memo(BadgePage);
