import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Cell, Switch, Button, Toast, Icon } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';
import { useState } from 'react';

const CellDemo: FC = () => {

  const [toastVisible, setToastVisible] = useState(false)
  const [checked, setChecked] = useState(true)

  return (
    <View className="container full-container">
      <DocsHeader title='Cell 单元格' />
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基础用法</View>
        <Cell title="单元格" value="相关内容" />
        <Cell title="单元格" value="相关内容" label="描述信息" border={false} />

        <View className='doc-body-content-tip'>卡片用法</View>
        <Cell.Group inset>
          <Cell title="单元格" value="相关内容" />
          <Cell title="单元格" value="相关内容" label="描述信息" border={false} />
        </Cell.Group>

        <View className='doc-body-content-tip'>展示图标</View>
        <Cell title="单元格" value="相关内容" icon="user" border={false} />

        <View className='doc-body-content-tip'>只设置value</View>
        <Cell value="单元格" />

        <View className='doc-body-content-tip'>展示箭头</View>
        <Cell title="单元格" iink onClick={() => setToastVisible(true)} />
        <Cell title="单元格" value="相关内容" iink onClick={() => setToastVisible(true)} />
        <Cell title="单元格" value="相关内容" iink arrowDirection="down" border={false} onClick={() => setToastVisible(true)} />

        <View className='doc-body-content-tip'>页面导航</View>
        <Cell title="路由跳转" iink to="/pages/home/index" pageType="navigateTo" />

        <View className='doc-body-content-tip'>分组单元格</View>
        <Cell.Group title="分组一">
          <Cell title="单元格" value="相关内容" />
        </Cell.Group>
        <Cell.Group title="分组二">
          <Cell title="单元格" value="相关内容" />
          <Cell title="单元格" value="相关内容" />
        </Cell.Group>

        <View className='doc-body-content-tip'>垂直居中</View>
        <Cell title="单元格" center value="相关内容" label="描述信息" border={false} />

        <View className='doc-body-content-tip'>使用插槽</View>
        <Cell value="相关内容" leftContent={<View className='left-content'>
          <View className='left-content__text'>单元格</View>
          <Button type="danger" size='mini'>标签</Button>
        </View>} />
        <Cell title="单元格" icon="user" rightContent={<Icon value='search' />} />
        <Cell title="单元格" rightContent={<View><Switch checked={checked} onChange={(v) => setChecked(v)} /></View>} />

        <Toast text="触发点击事件" visible={toastVisible} onClose={() => setToastVisible(false)} />
      </View>
    </View>
  );
};

export default memo(CellDemo);