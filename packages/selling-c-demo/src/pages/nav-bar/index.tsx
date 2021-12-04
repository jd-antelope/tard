import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlNavBar, SlToast } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const NavBar: FC = () => {
  const [toast, setToast] = useState(false);
  const [toast1, setToast1] = useState(false);

  const onClickLeft = () => {
    setToast(true)
  }

  const onClickRight = () => {
    setToast1(true)
  }

  return (
    <View className="container">
      <DocsHeader title='NavBar'></DocsHeader>
      <View className='doc-body'>

        <SlToast
          visible={toast}
          text='点击左侧事件'
          onClose={() => setToast(false)}
        />

        <SlToast
          visible={toast1}
          text='点击右侧事件'
          onClose={() => setToast1(false)}
        />

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

        <View className='doc-body-content-tip'>自定义链接颜色</View>
        <SlNavBar title="标题"
          leftIcon
          leftText='返回'
          color="#1989fa"
          onClickLeft={onClickLeft}
        />

        <View className='doc-body-content-tip'>自定义右侧图标</View>
        <SlNavBar title="标题"
          leftIcon
          leftText='返回'
          rightIconType='search'
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      </View>
    </View>
  );
};

export default memo(NavBar);