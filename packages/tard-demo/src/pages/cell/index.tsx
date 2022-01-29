import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCell, SlCellGroup, SlSwitch, SlButton, SlToast, SlIcon } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';
import { useState } from 'react';

const Cell: FC = () => {

  const [toastVisible, setToastVisible] = useState(false)
  const [checked, setChecked] = useState(true)

  return (
    <View className="container full-container">
      <DocsHeader title='Cell 单元格' />
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基础用法</View>
        <SlCell title="单元格" value="相关内容" />
        <SlCell title="单元格" value="相关内容" label="描述信息" border={false} />

        <View className='doc-body-content-tip'>卡片用法</View>
        <SlCellGroup inset>
          <SlCell title="单元格" value="相关内容" />
          <SlCell title="单元格" value="相关内容" label="描述信息" border={false} />
        </SlCellGroup>

        <View className='doc-body-content-tip'>展示图标</View>
        <SlCell title="单元格" value="相关内容" icon="user" border={false} />

        <View className='doc-body-content-tip'>只设置value</View>
        <SlCell value="单元格" />

        <View className='doc-body-content-tip'>展示箭头</View>
        <SlCell title="单元格" isLink onClick={() => setToastVisible(true)} />
        <SlCell title="单元格" value="相关内容" isLink onClick={() => setToastVisible(true)} />
        <SlCell title="单元格" value="相关内容" isLink arrowDirection="down" border={false} onClick={() => setToastVisible(true)} />

        <View className='doc-body-content-tip'>页面导航</View>
        <SlCell title="路由跳转" isLink to="/pages/home/index" pageType="navigateTo" />

        <View className='doc-body-content-tip'>分组单元格</View>
        <SlCellGroup title="分组一">
          <SlCell title="单元格" value="相关内容" />
        </SlCellGroup>
        <SlCellGroup title="分组二">
          <SlCell title="单元格" value="相关内容" />
          <SlCell title="单元格" value="相关内容" />
        </SlCellGroup>

        <View className='doc-body-content-tip'>垂直居中</View>
        <SlCell title="单元格" center value="相关内容" label="描述信息" border={false} />

        <View className='doc-body-content-tip'>使用插槽</View>
        <SlCell value="相关内容" leftContent={<View className='left-content'>
          <View className='left-content__text'>单元格</View>
          <SlButton type="danger" size='mini'>标签</SlButton>
        </View>} />
        <SlCell title="单元格" icon="user" rightContent={<SlIcon value='search' />} />
        <SlCell title="单元格" rightContent={<View><SlSwitch checked={checked} onChange={(v) => setChecked(v)} /></View>} />

        <SlToast text="触发点击事件" visible={toastVisible} onClose={() => setToastVisible(false)} />
      </View>
    </View>
  );
};

export default memo(Cell);