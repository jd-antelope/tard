import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { NavBar, Toast } from 'haw-ui-test'
import DocsHeader from '../../components/doc-header/index'

const NavBarPage: FC = () => {
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

        <Toast
          visible={toast}
          text='点击左侧事件'
          onClose={() => setToast(false)}
        />

        <Toast
          visible={toast1}
          text='点击右侧事件'
          onClose={() => setToast1(false)}
        />

        <View className='doc-body-content-tip'>基本用法</View>
        <NavBar title="标题" />

        <View className='doc-body-content-tip'>返回上级</View>
        <NavBar
          title="标题"
          leftIcon
          leftText='返回'
          onClickLeft={onClickLeft}
        />

        <View className='doc-body-content-tip'>自定义左侧图标</View>
        <NavBar title="标题"
          leftIcon
          leftText='返回'
          leftIconType='arrow-left'
          onClickLeft={onClickLeft}
        />

        <View className='doc-body-content-tip'>自定义链接颜色</View>
        <NavBar title="标题"
          leftIcon
          leftText='返回'
          color="#1989fa"
          onClickLeft={onClickLeft}
        />

        <View className='doc-body-content-tip'>自定义右侧图标</View>
        <NavBar title="标题"
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

export default memo(NavBarPage);