import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlNavBar } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const NavBar: FC = () => {
  const onClickLeft = () => {
    console.log('back')
  }

  return (
    <View className="container">
      <DocsHeader title='NavBar'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基本用法</View>
        <SlNavBar title="标题" />

        <View className='doc-body-content-tip'>返回上级</View>
        <SlNavBar
          title="标题"
          leftIcon
          leftText='返回'
          onClickLeft={onClickLeft}
        />

        <View className='doc-body-content-tip'>自定义左侧图标</View>
        <SlNavBar title="标题"
          leftIcon
          leftText='返回'
          leftIconType='arrow-left'
          onClickLeft={onClickLeft}
        />

      </View>
    </View>
  );
};

export default memo(NavBar);